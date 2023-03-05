let game = {
  player: null,
  currentRoom: null,
  rooms: {
    tutorial: {
      name: "tutorial",
      color: "white",
      location: {
        x1: 100,
        y1: 100,
        x2: 500,
        y2: 500,
      },
      exits: [
        {
          x: 500,
          y: 200,
          to: "first",
          hidden: false,
        },
      ],
    },
    first: {
      name: "first",
      color: "beige",
      location: {
        x1: 50,
        y1: 50,
        x2: 200,
        y2: 400,
      },
      exits: [
        {
          x: 25,
          y: 100,
          to: "tutorial",
          hidden: false,
        },
        {
          x: 200,
          y: 300,
          to: "second",
          hidden: false,
        },
      ],
    },
    second: {
      name: "second",
      color: "olive",
      location: {
        x1: 250,
        y1: 150,
        x2: 450,
        y2: 400,
      },
      exits: [
        {
          x: 225,
          y: 200,
          to: "first",
          hidden: false,
        },
        {
          x: 450,
          y: 200,
          to: "tutorial",
          hidden: false,
        },
      ],
    },
  },
};
