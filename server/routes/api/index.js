const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const Tour = require("../../models/Tour.js");
const TourComment = require("../../models/TourComment.js");
const UserComment = require("../../models/UserComment.js");
const uploadCloud = require("../../configs/cloudinary.js");

// router.get("/results-map", (req, res, next) => {
//   let info = {};
//   console.log(info);
//   res.render("results-map", info);
// });

router.post('/upload', uploadCloud.single("img"), (req, res, next) => {
  if (!req.file) {
      next(new Error('No file uploaded!'));
      return;
  }
  res.json({ secure_url: req.file.secure_url });
})

router.post('/uploadAudio', uploadCloud.single("audio"), (req, res, next) => {
  if (!req.file) {
      next(new Error('No file uploaded!'));
      return;
  }
  res.json({ secure_url: req.file.secure_url });
})

router.get("/toursMini", (req, res) => {
  Tour.find()
    .select({ title: 1, img: 1, owner: 1, location: 1 })
    .populate("owner")
    .then(tours => res.json(tours));
});

router.get("/toursRoute/:id", (req, res) => {
  Tour.find()
    .select({ title: 1, route: 1 })
    .then(tours => res.json(tours));
});

router.get("/tours", (req, res, next) => {
  Tour.find()
    .populate([
      {
        path: "owner",
        model: "User",
      },
      {
        path: "comments",
        model: "TourComment"
      }
    ])
    .then(toursFound => {
      res.json(toursFound);
    })
    .catch(err => {
      console.error("Error connecting to mongo");
      next(err);
    });
});

router.get("/tour/:id", (req, res, next) => {
  Tour.findById(req.params.id)
    .populate([
      {
        path: "owner",
        model: "User",
      },
      {
        path: "comments",
        model: "TourComment"
      }
    ])
    .then(tourFound => {
      res.json(tourFound);
    })
    .catch(err => {
      console.error("Error connecting to mongo");
      next(err);
    });
});

router.get("/delete-tour/:id", (req, res, next) => {
  Tour.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json({ status: "Tour delete" });
    })
    .catch(err => next(err));
});

router.put("/:id/fav/add", (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, { $push: { fav: req.body.fav }}, { new: true })
  .then(updatedUser => res.status(200).json(updatedUser))
  .catch(err => console.log(err))
});

// router.get("/delete-fav/:id", (req, res, next) => {
//   Tour.findByIdAndDelete(req.params.id)
//     .then(() => {
//       res.json({ status: "Tour fav delete" });
//     })
//     .catch(err => next(err));
// });

router.post("/edit-tour/:id", (req, res, next) => {
  const { img, title, description, languages, duration } = req.body;

  const data = {
    img: img,
    title: title,
    description: description,
    languages: languages,
    duration: duration
  };

  Tour.findByIdAndUpdate(req.params.id, data, { new: true })
    .then(tour => res.json({ status: "Tour modified", tour: tour }))
    .catch(err => next(err));
});

router.post("/new-tour", uploadCloud.single("img"), (req, res, next) => {
  // let lat, lng;
  // geocoder
  //   .geocode(req.body.location, function(err, res) {
  //     lat = res[0].latitude;
  //     lng = res[0].longitude;
  //   })

  // let location = { type: "Point", coordinates: [lat, lng] };
  let tour = {
    img: req.body.img,
    title: req.body.title,
    audio: req.body.audio,
    location: req.body.location,
    description: req.body.description,
    languages: req.body.languages,
    duration: req.body.duration,
    owner: req.body.owner
  };

  // if (req.file) {
  //   event.img = req.file.url;
  // }
  Tour.create(tour)
    .then(tour => res.json({ status: "Tour created", tour: tour }))
    .catch(err => next(err));
  
});

router.get("/profile/:id", (req, res, next) => {
  User.findById(req.params.id)
    .populate([
      {
        path: "toursCreated",
        model: "Tour",
        populate: {
          path: "comments",
          model: "TourComment"
        }
      },
      {
        path: "comments",
        model: "UserComment"
      },
      {
        path: "fav",
        model: "Tour",
        populate: {
          path: "comments",
          model: "TourComment"
        }
      },
      {
        path: "historic",
        model: "Tour",
        populate: {
          path: "comments",
          model: "TourComment"
        }
      }
    ])
    .then(userFound => {
      res.json(userFound);
    })
    .catch(err => {
      console.error("Error connecting to mongo");
      next(err);
    });
});

router.post("/edit-profile/:id", uploadCloud.single("img"), (req, res, next) => {
  const {
    username,
    password,
    img,
    name,
    surname,
    email,
    description
  } = req.body;

  const data = {
    username: username,
    password: password,
    img: img,
    name: name,
    surname: surname,
    email: email,
    description: description
  };

  User.findByIdAndUpdate(req.params.id, data, { new: true })
    .then(user => res.json({ status: "User modified", user: user }))
    .catch(err => next(err));
});



//BARRA BUSQUEDA
router.get("/results/:filter", (req, res, next) => {
  let filter = req.params.filter;
  Tour.find({
    title: new RegExp(filter, "gi")
  })
    .then(toursFound => res.json(toursFound))
    .catch(err => {
      console.error("Error connecting to mongo");
      next(err);
    });
});

module.exports = router;
