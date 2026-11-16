//  IFS FERN STRUCTURE
{
  /*   
    Every rule has two formulas:

    x: { a, b, e }
    y: { c, d, f }
    Together they form:

    nextX = a * x + b * y + e
    nextY = c * x + d * y + f
    The values do different visual jobs:

    a and d mostly scale/stretch the form in x/y.

    b and c mix x and y, which creates rotation/shear.

    e moves the point horizontally.

    f moves the point vertically.

    limit controls how often that transformation gets used, depending on its order.

    So a rule like:

    {
      limit: 0.85,
      x: { a: 0.845, b: 0.035, e: 0 },
      y: { c: -0.035, d: 0.82, f: 1.6 },
    }
    usually creates a repeated rising/contracting structure, because:

    a and d are less than 1, so the point cloud contracts,
    b and c add slight twist/shear,
    f: 1.6 pushes points upward.
    
    A rule like:

    {
      limit: Infinity,
      x: { a: -0.15, b: 0.24, e: 0 },
      y: { c: 0.25, d: 0.2, f: 0.68 },
    }
    usually creates a rarer branch/side structure, because it only runs after previous thresholds fail.

    smaller threshold rule => stem or special structural mark

    larger threshold rule => main repeated body/frond

    medium threshold rules => side leaflets or branching structures
  */
}

window.kangaBorderPatternFractalIFS = [
  {
    name: "ifs-fern-01-(horizon-palms)",
    optimals: {
      amplitude: 0.25,
      fernScale: 0.5,
      fernObjectSize: 1,
      pointCount: 1000,
    },
    rules: [
      {
        limit: 0.01,
        x: { a: 0, b: 0, e: 1 },
        y: { c: 0, d: 0, f: -0.14 },
      },
      {
        limit: 0.85,
        x: { a: 0.85, b: 0.02, e: -0.51 },
        y: { c: -0.2, d: 0.85, f: -0.5 },
      },
      {
        limit: 0.93,
        x: { a: 0.5, b: 0.15, e: 0 },
        y: { c: 0.5, d: -0.05, f: 0.2 },
      },
      {
        limit: Infinity,
        x: { a: -0.95, b: 0.3, e: -1 },
        y: { c: 0.75, d: -0.5, f: -0.25 },
      },
    ],
  },

  {
    name: "ifs-fern-02-(carapace-tent)",
    optimals: {
      amplitude: 0.25,
      fernScale: 1,
      fernObjectSize: 1,
      pointCount: 1000,
    },
    rules: [
      {
        limit: 0.1,
        x: { a: -0.1, b: 0.2, e: 0.75 },
        y: { c: 0.3, d: -0.4, f: -1.55 },
      },
      {
        limit: 0.86,
        x: { a: -0.75, b: 0.5, e: -0.5 },
        y: { c: 0.2, d: 0.75, f: -0.15 },
      },
      {
        limit: 0.98,
        x: { a: -0.55, b: 0.25, e: 0 },
        y: { c: 0.5, d: -0.1, f: 0.5 },
      },
      {
        limit: Infinity,
        x: { a: 1.5, b: 0.7, e: -1 },
        y: { c: -0.5, d: 0.55, f: -0.25 },
      },
    ],
  },

  {
    name: "ifs-fern-03-(bouquet-room)",
    optimals: {
      amplitude: 0.125,
      fernScale: 1.75,
      fernObjectSize: 1,
      pointCount: 10000,
    },
    rules: [
      {
        limit: 0.4,
        x: { a: 0.5, b: 0, e: 0.5 },
        y: { c: 0, d: -0.4, f: 0.83 },
      },
      {
        limit: 0.86,
        x: { a: 0.15, b: -0.5, e: -0.05 },
        y: { c: 0.7, d: -0.2, f: 0.95 },
      },
      {
        limit: 0.93,
        x: { a: 0.25, b: -0.99, e: 0 },
        y: { c: 0.1, d: -0.75, f: 0.9 },
      },
      {
        limit: Infinity,
        x: { a: 0.5, b: -1.7, e: 0 },
        y: { c: 0.2, d: -0.55, f: -0.25 },
      },
    ],
  },

  {
    name: "ifs-fern-04-(bunny-chameleon)",
    optimals: {
      amplitude: 0.2,
      fernScale: 0.05,
      fernObjectSize: 1.125,
      pointCount: 750,
    },
    rules: [
      {
        limit: 0.01,
        x: { a: 0.1, b: 0.5, e: 1 },
        y: { c: 0.07, d: 0.1, f: 0.2 },
      },
      {
        limit: 0.86,
        x: { a: 0.9, b: 0.9, e: 0 },
        y: { c: -0.04, d: 0.85, f: 1.6 },
      },
      {
        limit: 0.93,
        x: { a: 0.2, b: -0.26, e: 0 },
        y: { c: 0.23, d: 0.22, f: 1.6 },
      },
      {
        limit: Infinity,
        x: { a: -0.15, b: 0.28, e: 0 },
        y: { c: 0.26, d: 0.24, f: 0.44 },
      },
    ],
  },

  {
    name: "ifs-fern-05-(angel-moth)",
    optimals: {
      amplitude: 0.25,
      fernScale: 1,
      fernObjectSize: 0.75,
      pointCount: 10000,
    },
    rules: [
      {
        limit: 0.1,
        x: { a: 0, b: 0, e: 0 },
        y: { c: 0, d: 0.5, f: 0.2 },
      },
      {
        limit: 0.84,
        x: { a: -0.85, b: 0.15, e: 0 },
        y: { c: 0.15, d: 0.9, f: 0.15 },
      },
      {
        limit: 0.93,
        x: { a: -0.5, b: 0.5, e: -1.5 },
        y: { c: 0.15, d: 0.15, f: 2.5 },
      },
      {
        limit: Infinity,
        x: { a: 0.25, b: -0.1, e: -0.5 },
        y: { c: -1.5, d: -0.55, f: 0.25 },
      },
    ],
  },

  {
    name: "ifs-fern-06-(crescent)",
    optimals: {
      amplitude: 0.25,
      fernScale: 1,
      fernObjectSize: 0.5,
      pointCount: 5000,
    },
    rules: [
      {
        limit: 0.2,
        x: { a: 0.2, b: -0.9, e: 0 },
        y: { c: 0, d: 0.5, f: -0.72 },
      },
      {
        limit: 0.84,
        x: { a: 0.85, b: 0.5, e: 0 },
        y: { c: -0.15, d: 0.9, f: 0.5 },
      },
      {
        limit: 0.93,
        x: { a: -0.5, b: 0.5, e: -1.5 },
        y: { c: 0.15, d: 0.15, f: 2.75 },
      },
      {
        limit: Infinity,
        x: { a: 0.25, b: -0.1, e: -0.5 },
        y: { c: -0.5, d: -0.155, f: 0.925 },
      },
    ],
  },

  {
    name: "ifs-fern-07-(scorpion-sleeves)",
    optimals: {
      amplitude: 0.25,
      fernScale: 2,
      fernObjectSize: 0.2, // 0.8 with static mode 0.2 with grow mode
      pointCount: 100000,
    },
    rules: [
      {
        limit: 0.3,
        x: { a: 0, b: 0, e: 0 },
        y: { c: 0, d: -0.1, f: -0.55 },
      },
      {
        limit: 0.85,
        x: { a: 0.845, b: 0.35, e: 0 },
        y: { c: -0.35, d: 0.82, f: -1.6 },
      },
      {
        limit: 0.93,
        x: { a: 0.2, b: -0.31, e: 0 },
        y: { c: 0.255, d: 0.245, f: 0.29 },
      },
      {
        limit: Infinity,
        x: { a: -0.15, b: 0.24, e: 0 },
        y: { c: 0.25, d: 0.2, f: 0.68 },
      },
    ],
  },

  {
    name: "kanga-ifs-08-(fishbones)",
    optimals: {
      amplitude: 0.25,
      fernScale: 1,
      fernObjectSize: 1,
      pointCount: 10000,
    },
    rules: [
      {
        limit: 0.2,
        x: { a: 0, b: 0, e: 0 },
        y: { c: 0, d: -0.1, f: -0.55 },
      },
      {
        limit: 0.85,
        x: { a: 0.845, b: 0.035, e: 0 },
        y: { c: -0.035, d: 0.82, f: -0.6 },
      },
      {
        limit: 0.93,
        x: { a: 0.2, b: -0.31, e: 0 },
        y: { c: 0.255, d: 0.245, f: 0.29 },
      },
      {
        limit: Infinity,
        x: { a: -0.15, b: 0.24, e: 0 },
        y: { c: 0.25, d: 0.2, f: 0.68 },
      },
    ],
  },

  {
    name: "ifs-fern-09-(impossible-palm)",
    optimals: {
      amplitude: 0.25,
      fernScale: 1,
      fernObjectSize: 1,
      pointCount: 1000,
    },
    rules: [
      {
        limit: 0.02,
        x: { a: 0, b: 0, e: 0.5 },
        y: { c: 0, d: 0, f: -0.14 },
      },
      {
        limit: 0.84,
        x: { a: 0.95, b: 0.05, e: 0 },
        y: { c: -0.25, d: 0.75, f: -0.1 },
      },
      {
        limit: 0.9,
        x: { a: -0.5, b: -0.35, e: 1 },
        y: { c: 0.3, d: -0.1, f: 0.2 },
      },
      {
        limit: Infinity,
        x: { a: 0.5, b: 0.3, e: -1 },
        y: { c: 0.3, d: 0.25, f: 0.25 },
      },
    ],
  },

  {
    name: "ifs-fern-10-(skull)",
    optimals: {
      amplitude: 0.25,
      fernScale: 1,
      fernObjectSize: 1,
      pointCount: 10000,
    },
    rules: [
      {
        limit: 0.01,
        x: { a: -0.49, b: 0.101, e: 0.9 },
        y: { c: 0, d: 0, f: 0.9 },
      },
      {
        limit: 0.86,
        x: { a: 0.1, b: 0.45, e: 0.95 },
        y: { c: 0.652, d: 0.279, f: 0.1 },
      },
      {
        limit: 0.93,
        x: { a: -0.41, b: 0.091, e: 0.15 },
        y: { c: 0.85, d: 0.5, f: 0.049 },
      },
      {
        limit: Infinity,
        x: { a: -0.95, b: 0.02, e: 0.19 },
        y: { c: 0.09, d: 0.19, f: 0.08 },
      },
    ],
  },

  {
    name: "ifs-fern-11-(sans-soleil)",
    optimals: {
      amplitude: 0.25,
      fernScale: 1,
      fernObjectSize: 1,
      pointCount: 10000,
    },
    rules: [
      {
        limit: 0.01,
        x: { a: 0, b: 0, e: 0.9 },
        y: { c: 0, d: 0.1, f: -0.955 },
      },
      {
        limit: 0.85,
        x: { a: 0.845, b: 0.5, e: 0 },
        y: { c: -0.5, d: 0.82, f: 0.6 },
      },
      {
        limit: 0.93,
        x: { a: 0.2, b: 0.24, e: 0 },
        y: { c: 0.9255, d: 0.245, f: 0.9 },
      },
      {
        limit: Infinity,
        x: { a: -0.915, b: 0.24, e: 0 },
        y: { c: 0.25, d: 0.2, f: 0.68 },
      },
    ],
  },

  {
    name: "ifs-fern-12-(icon)",
    optimals: {
      amplitude: 0.25,
      fernScale: 1,
      fernObjectSize: 1.25,
      pointCount: 1000,
    },
    rules: [
      {
        limit: 0.4,
        x: { a: 0, b: 0, e: 0.1 },
        y: { c: 0, d: 0.75, f: -0.55 },
      },
      {
        limit: 0.86,
        x: { a: -0.6, b: -0.02, e: 0.52 },
        y: { c: 0.09, d: 0.85, f: -0.052 },
      },
      {
        limit: 0.93, //hair
        x: { a: 0.195, b: 0.15, e: 0.525 }, //325
        y: { c: 0.093, d: 0.05, f: 0.3 },
      },
      {
        limit: Infinity,
        x: { a: 0.195, b: 0.13, e: -0.25 }, //e -0/0
        y: { c: 0.95, d: 0.155, f: -0.925 },
      },
    ],
  },

  {
    name: "ifs-fern-13-(tower)",
    optimals: {
      amplitude: 0.25,
      fernScale: 1,
      fernObjectSize: 0.5,
      pointCount: 1000,
    },
    rules: [
      {
        limit: 0.01,
        x: { a: 0, b: 0, e: 0.1 },
        y: { c: 0, d: 0, f: -0.55 },
      },
      {
        limit: 0.86,
        x: { a: 0.85, b: -0.02, e: -0.2 },
        y: { c: 0.09, d: 0.85, f: -0.52 },
      },
      {
        limit: 0.93,
        x: { a: -0.5, b: 0.15, e: 0 },
        y: { c: 0.3, d: -0.1, f: 0.92 },
      },
      {
        limit: Infinity,
        x: { a: -0.5, b: 0.3, e: -0.1 },
        y: { c: 0.5, d: 0.55, f: -0.25 },
      },
    ],
  },

  {
    name: "ifs-fern-14-(fossil-floral)",
    optimals: {
      amplitude: 0.25,
      fernScale: 1,
      fernObjectSize: 1,
      pointCount: 1000,
    },
    rules: [
      {
        limit: 0.01,
        x: { a: 0, b: 0, e: 0.9 },
        y: { c: 0, d: 0.1, f: -0.955 },
      },
      {
        limit: 0.85,
        x: { a: 0.845, b: 0.5, e: 0 },
        y: { c: -0.5, d: 0.82, f: 0.6 },
      },
      {
        limit: 0.93,
        x: { a: 0.2, b: -0.31, e: 0 },
        y: { c: 0.255, d: 0.245, f: 0.29 },
      },
      {
        limit: Infinity,
        x: { a: -0.15, b: 0.24, e: 0 },
        y: { c: 0.25, d: 0.2, f: 0.68 },
      },
    ],
  },

  {
    name: "ifs-fern-15-(squared-spine)",
    optimals: {
      amplitude: 0.25,
      fernScale: 1,
      fernObjectSize: 0.5,
      pointCount: 10000, //if trail fadeMode and static fernMode     pointCount: 1000,
    },
    rules: [
      {
        limit: 0.25,
        x: { a: 0.95, b: 0, e: 0.9 },
        y: { c: 0, d: 0.1, f: -0.955 },
      },
      {
        limit: 0.85,
        x: { a: 0.845, b: 0.5, e: 0 },
        y: { c: -0.5, d: 0.82, f: 0.6 },
      },
      {
        limit: 0.93,
        x: { a: 0.2, b: -0.31, e: 0 },
        y: { c: 0.9255, d: 0.245, f: 0.9 },
      },
      {
        limit: Infinity,
        x: { a: -0.915, b: 0.24, e: 0 },
        y: { c: 0.25, d: 0.92, f: 0.8 },
      },
    ],
  },

  {
    name: "ifs-fern-16-(strigine)",
    optimals: {
      amplitude: 0.25,
      fernScale: 1,
      fernObjectSize: 0.75,
      pointCount: 7500,
    },
    rules: [
      {
        limit: 0.01,
        x: { a: 0, b: 0, e: 0.9 },
        y: { c: 0, d: 0.1, f: -0.955 },
      },
      {
        limit: 0.85,
        x: { a: 0.845, b: 0.5, e: 0 },
        y: { c: -0.5, d: 0.82, f: 0.6 },
      },
      {
        limit: 0.93,
        x: { a: 0.2, b: -0.31, e: 0 },
        y: { c: 0.9255, d: 0.245, f: 0.9 },
      },
      {
        limit: Infinity,
        x: { a: -0.915, b: 0.24, e: 0 },
        y: { c: 0.25, d: 0.92, f: 0.8 },
      },
    ],
  },

  {
    name: "ifs-fern-17-(mt-kili)",
    optimals: {
      amplitude: 0.25,
      fernScale: 1,
      fernObjectSize: 1,
      pointCount: 1000,
    },
    rules: [
      {
        limit: 0.01,
        x: { a: 0.5, b: 0, e: 0 },
        y: { c: 0, d: 0.7, f: 0 },
      },
      {
        limit: 0.2,
        x: { a: 0.2, b: 0.1, e: 1 },
        y: { c: 0.1, d: 0.2, f: 0 },
      },
      {
        limit: 0.4,
        x: { a: -0.4, b: 0.3, e: 0 },
        y: { c: 0.2, d: 0.3, f: 1 },
      },
      {
        limit: 0.7,
        x: { a: 0.7, b: -0.1, e: -1 },
        y: { c: -0.1, d: 0.7, f: 0 },
      },
      {
        limit: Infinity,
        x: { a: -0.2, b: 0.25, e: 0 },
        y: { c: 0.15, d: -0.2, f: 0 },
      },
    ],
  },
];

window.hydraKanga = async () => {
  await loadScript(
    "https://cdn.jsdelivr.net/gh/geikha/hyper-hydra@latest/hydra-text.js",
  ); //geikha's hydra text library
  await loadScript(
    "https://cdn.jsdelivr.net/gh/geikha/hydra-antlia@master/antlia-colors.js",
  ); //geikha's hydra colours library
  console.log(`hydraKanga.js loaded`);

  //gold ground background
  // window.goldGround = (col) => {
  //   return shape(4, 1, 0).layer(noise(999, 1).invert().luma()).color_(col);
  // };
  window.goldGround = (col) => {
    return shape(4, 1, 0).layer(noise(999, 1).invert().luma()).color_(col);
  };

  initKangaBorder = () => {
    cnvPindo = document.createElement("canvas"); //border
    // buffer to draw border pattern onto
    borderPatternCnv = document.createElement("canvas"); //border pattern
    borderPattCtx = borderPatternCnv.getContext("2d");

    cnvPindo.width = width;
    cnvPindo.height = height;
    ctxB = cnvPindo.getContext("2d");
    // define border canvas proportions
    ctxBX = cnvPindo.width * (50 / 300);
    ctxBY = cnvPindo.height * (25 / 150);
    ctxBW = cnvPindo.width * (200 / 300);
    ctxBH = cnvPindo.height * (95 / 150);
    ctxBLW = cnvPindo.width * (30 / 300);
    ctxB.lineWidth = ctxBLW;

    s0.init({ src: cnvPindo, dynamic: true });
  };
  initKangaBorder();

  setKangaBorderCol = (col) => {
    borderPattCtx.fillStyle = col;
    borderPattCtx.fillRect(0, 0, tileSize, tileSize);
    return src(s0);
  };

  //Border Globals
  tileSize = cnvPindo.width / 12;

  borderBgTileCnv = document.createElement("canvas");
  borderBgTileCtx = borderBgTileCnv.getContext("2d");

  borderFernPatternCnv = document.createElement("canvas");
  borderFernPattCtx = borderFernPatternCnv.getContext("2d");

  borderBgTileCnv.width = tileSize;
  borderBgTileCnv.height = tileSize;

  borderFernPatternCnv.width = tileSize;
  borderFernPatternCnv.height = tileSize;

  borderBgTileX = 0;
  borderBgTileY = 0;

  //Separate scroll offset to the border bg
  borderFernPatternX = 0;
  borderFernPatternY = 0;

  borderFramecountTrack = 0;

  fernObjCnv = document.createElement("canvas");
  fernObjCtx = fernObjCnv.getContext("2d");

  currentFernCacheKey = "";

  applyBorderIFSFern = (ruleSet, x, y, r = Math.random()) => {
    for (const rule of ruleSet.rules) {
      // console.log(ruleSet.optimals);

      //Loop through and apply affine transform to limit greater than r etc...
      if (r < rule.limit) {
        return [
          rule.x.a * x + rule.x.b * y + rule.x.e,
          rule.y.c * x + rule.y.d * y + rule.y.f,
        ];
      }
    }

    const fallback = ruleSet.rules[ruleSet.rules.length - 1];

    return [
      fallback.x.a * x + fallback.x.b * y + fallback.x.e,
      fallback.y.c * x + fallback.y.d * y + fallback.y.f,
    ];
  };

  renderStaticFernObject = (
    col = "white",
    shapeIndex = 6,
    fernScale = 0.7,
    pointCount = 5000,
  ) => {
    const ifsIndex = selectFractalIFS(shapeIndex);

    // console.log(ifsIndex);

    //Cache values for the ferns to optimise points rendering
    const cacheKey = `${col}-${ifsIndex}-${tileSize}-${fernScale}-${pointCount}`;

    //Return if no change
    if (currentFernCacheKey === cacheKey) {
      return;
    }

    currentFernCacheKey = cacheKey;

    const objectSize = tileSize;
    fernObjCnv.width = objectSize;
    fernObjCnv.height = objectSize;

    fernObjCtx.save();
    fernObjCtx.globalAlpha = 1;
    fernObjCtx.globalCompositeOperation = "source-over"; //default blend mode //read mdn docs on other operations: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
    fernObjCtx.clearRect(0, 0, fernObjCnv.width, fernObjCnv.height);
    fernObjCtx.fillStyle = col;

    const ruleSet = kangaBorderPatternFractalIFS[ifsIndex];

    let cX = 0;
    let cY = 0;

    const fernPoint = Math.max(0.5, tileSize * 0.012);

    //Smaller = larger fern / Larger = smaller fern
    const coordinateScale = 4 / fernScale; //4 default

    for (let i = 0; i < pointCount; i++) {
      [cX, cY] = applyBorderIFSFern(ruleSet, cX, cY);

      const px = objectSize * (0.5 + cX / coordinateScale);
      const py = objectSize * (0.5 - cY / coordinateScale);

      fernObjCtx.fillRect(px, py, fernPoint, fernPoint);
    }

    fernObjCtx.restore();
  };

  selectFractalIFS = (shapeIndex = 6) => {
    if (shapeIndex === "r") {
      return Math.floor(Math.random() * kangaBorderPatternFractalIFS.length);
    }

    // console.log(ruleSet.optimals);
    // console.log(shapeIndex.name);

    return Math.max(
      0,
      Math.min(kangaBorderPatternFractalIFS.length - 1, shapeIndex - 1),
    );
  };

  getBorderScrollStep = (dir = "up") => {
    if (dir === "r") {
      dir = [
        "up",
        "down",
        "left",
        "right",
        "upLeft",
        "upRight",
        "downLeft",
        "downRight",
      ][Math.floor(Math.random() * 8)];
    }

    const directions = {
      up: [0, -1],
      down: [0, 1],
      left: [-1, 0],
      right: [1, 0],
      upLeft: [-1, -1],
      upRight: [1, -1],
      downLeft: [-1, 1],
      downRight: [1, 1],
      none: [0, 0],
    };

    return directions[dir] || directions.up;
  };

  getOppositeBorderDir = (dir = "up") => {
    const opposites = {
      up: "down",
      down: "up",
      left: "right",
      right: "left",
      upLeft: "downRight",
      upRight: "downLeft",
      downLeft: "upRight",
      downRight: "upLeft",
      none: "none",
    };

    return opposites[dir] || "down";
  };

  drawBorderBackgroundTile = ({
    bgMode = "solid",
    bgColA = "black",
    bgColB = "rgb(128, 128, 128)",
    debugTile = false,
    debugTileCol = "rgba(255, 0, 0, 1)",
  } = {}) => {
    borderBgTileCtx.save();
    borderBgTileCtx.globalAlpha = 1;
    borderBgTileCtx.globalCompositeOperation = "source-over";
    borderBgTileCtx.clearRect(0, 0, tileSize, tileSize);

    if (bgMode === "transparent") {
      // Leaves tile clear.
    }

    if (bgMode === "solid") {
      borderBgTileCtx.fillStyle = bgColA;
      borderBgTileCtx.fillRect(0, 0, tileSize, tileSize);
    }

    if (bgMode === "checker") {
      const halfTile = tileSize * 0.5;

      borderBgTileCtx.fillStyle = bgColA;
      borderBgTileCtx.fillRect(0, 0, halfTile, halfTile);
      borderBgTileCtx.fillRect(halfTile, halfTile, halfTile, halfTile);

      borderBgTileCtx.fillStyle = bgColB;
      borderBgTileCtx.fillRect(halfTile, 0, halfTile, halfTile);
      borderBgTileCtx.fillRect(0, halfTile, halfTile, halfTile);
    }

    if (bgMode === "stripeX") {
      borderBgTileCtx.fillStyle = bgColA;
      borderBgTileCtx.fillRect(0, 0, tileSize, tileSize);

      borderBgTileCtx.fillStyle = bgColB;
      borderBgTileCtx.fillRect(0, 0, tileSize, tileSize * 0.5);
    }

    if (bgMode === "stripeY") {
      borderBgTileCtx.fillStyle = bgColA;
      borderBgTileCtx.fillRect(0, 0, tileSize, tileSize);

      borderBgTileCtx.fillStyle = bgColB;
      borderBgTileCtx.fillRect(0, 0, tileSize * 0.5, tileSize);
    }

    if (debugTile) {
      borderBgTileCtx.strokeStyle = debugTileCol;
      borderBgTileCtx.lineWidth = 1;
      borderBgTileCtx.strokeRect(0.5, 0.5, tileSize - 1, tileSize - 1);
    }

    borderBgTileCtx.restore();
  };

  drawGrowingFernObject = ({
    ctx,
    col = "white",
    shapeIndex = 6,
    fernScale = 1,
    pointCount = 1000,
    x = 0,
    y = 0,
    w = tileSize,
    h = tileSize,
  } = {}) => {
    const ifsIndex = selectFractalIFS(shapeIndex);

    const ruleSet = kangaBorderPatternFractalIFS[ifsIndex];

    let cX = 0;
    let cY = 0;

    const fernPoint = Math.max(0.5, tileSize * 0.012);
    const coordinateScale = 4 / fernScale;

    ctx.save();
    ctx.fillStyle = col;
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = "source-over";

    for (let i = 0; i < pointCount; i++) {
      [cX, cY] = applyBorderIFSFern(ruleSet, cX, cY);

      const px = x + w * (0.5 + cX / coordinateScale);
      const py = y + h * (0.5 - cY / coordinateScale);

      ctx.fillRect(px, py, fernPoint, fernPoint);
    }

    ctx.restore();
  };

  //Workhorse fern pattern tile renderer function
  drawBorderFernTile = ({
    col = "white",
    shapeIndex = 6,
    fernScale = 1,
    fernObjectSize = 0.7,
    pointCount = 10000,
    amplitude = 0.18,
    speed = 1,
    dir = "up",
    motion = "linear",
    fadeMode = "clear",
    trailAlpha = 0.075,
    trailCol = "rgba(0, 0, 0, 1)",
    fernMode = "static",
    growingPointCount = 500,
  } = {}) => {
    let wobbleX = 0;
    let wobbleY = 0;

    const wave = Math.sin(time * speed * 1.5) * tileSize * amplitude;

    if (motion === "sine" || motion === "scrollSine") {
      if (dir === "left" || dir === "right") {
        wobbleX = wave;
        wobbleY = wave * 2;
      }

      if (dir === "up" || dir === "down") {
        wobbleX = wave * 2;

        wobbleY = wave;
      }

      if (
        dir === "up-left" ||
        dir === "down-left" ||
        dir === "up-right" ||
        dir === "down-right"
      ) {
        const [dirX, dirY] = getBorderScrollStep(dir);
        wobbleX = wave * dirX;
        wobbleY = wave * dirY;
      }
    }

    if (motion === "circle") {
      wobbleX = Math.cos(time * speed) * tileSize * amplitude;
      wobbleY = Math.sin(time * speed) * tileSize * amplitude;
    }

    if (motion === "orbit") {
      wobbleX = Math.cos(time * speed) * tileSize * amplitude;
      wobbleY = Math.sin(time * speed * 1.618) * tileSize * amplitude;
    }

    borderFernPattCtx.save();

    if (fadeMode === "clear") {
      borderFernPattCtx.globalAlpha = 1;
      borderFernPattCtx.globalCompositeOperation = "source-over";
      borderFernPattCtx.clearRect(0, 0, tileSize, tileSize);
    }

    if (fadeMode === "trail") {
      borderFernPattCtx.globalAlpha = trailAlpha;
      borderFernPattCtx.globalCompositeOperation = "destination-out";

      borderFernPattCtx.fillStyle = trailCol;
      borderFernPattCtx.fillRect(0, 0, tileSize, tileSize);
    }

    const drawSize = tileSize * fernObjectSize;
    const baseX = (tileSize - drawSize) * 0.5;
    const baseY = (tileSize - drawSize) * 0.5;

    borderFernPattCtx.globalAlpha = 1;
    borderFernPattCtx.globalCompositeOperation = "source-over";

    if (fernMode === "static") {
      renderStaticFernObject(col, shapeIndex, fernScale, pointCount);

      borderFernPattCtx.drawImage(
        fernObjCnv,
        baseX + wobbleX,
        baseY + wobbleY,
        drawSize,
        drawSize,
      );
    }

    if (fernMode === "grow") {
      drawGrowingFernObject({
        ctx: borderFernPattCtx,
        col,
        shapeIndex,
        fernScale,
        pointCount: growingPointCount,
        x: baseX + wobbleX,
        y: baseY + wobbleY,
        w: drawSize,
        h: drawSize,
      });
    }

    borderFernPattCtx.restore();
  };

  drawKangaBorderPattern = (
    col = "white",
    shapeIndex = 6,
    dir = "up",
    speed = 1,
    motion = "linear",
    opts = {},
  ) => {
    const {
      bgMode = "solid",
      bgCol = "black",
      bgColA = bgCol,
      bgColB = "rgb(128, 128, 128)",
      bgDir = "opposite",
      bgSpeed = speed,
      bgTileScroll = true,

      fernScale = 1.0,
      fernObjectSize = 0.7,
      amplitude = 0.18,

      debugTile = false,
      debugTileCol = "rgba(255, 0, 0, 1)",

      scrollFernPattern = true,
      fadeMode = "clear",
      trailAlpha = 0.075,

      pointCount = 10000,
      fernMode = "static",
      growingPointCount = 500,
    } = opts;

    borderFramecountTrack++;

    const resolvedBgDir =
      bgDir === "opposite" ? getOppositeBorderDir(dir) : bgDir;

    const [fernDx, fernDy] = getBorderScrollStep(dir);
    const [bgDx, bgDy] = getBorderScrollStep(resolvedBgDir);

    drawBorderBackgroundTile({
      bgMode,
      bgColA,
      bgColB,
      debugTile,
      debugTileCol,
    });

    drawBorderFernTile({
      col,
      shapeIndex,
      fernScale,
      fernObjectSize,
      pointCount,
      amplitude,
      speed,
      dir,
      motion,
      fadeMode,
      trailAlpha,
      trailCol: bgColA,
      fernMode,
      growingPointCount,
    });

    if (
      scrollFernPattern &&
      (motion === "linear" ||
        motion === "scrollSine" ||
        motion === "orbit" ||
        motion === "circle")
    ) {
      borderFernPatternX =
        (borderFernPatternX + fernDx * speed + tileSize) % tileSize;
      borderFernPatternY =
        (borderFernPatternY + fernDy * speed + tileSize) % tileSize;
    }

    if (bgTileScroll) {
      borderBgTileX = (borderBgTileX + bgDx * bgSpeed + tileSize) % tileSize;
      borderBgTileY = (borderBgTileY + bgDy * bgSpeed + tileSize) % tileSize;
    }

    const bgBorder = ctxB.createPattern(borderBgTileCnv, "repeat");
    bgBorder.setTransform(
      new DOMMatrix().translate(borderBgTileX, borderBgTileY),
    );

    ctxB.strokeStyle = bgBorder;
    ctxB.lineWidth = ctxBLW;
    ctxB.strokeRect(ctxBX, ctxBY, ctxBW, ctxBH);

    const fernPattern = ctxB.createPattern(borderFernPatternCnv, "repeat");
    fernPattern.setTransform(
      new DOMMatrix().translate(borderFernPatternX, borderFernPatternY),
    );

    ctxB.strokeStyle = fernPattern;
    ctxB.lineWidth = ctxBLW;
    ctxB.strokeRect(ctxBX, ctxBY, ctxBW, ctxBH);
  };

  // initKangaCentral(col)
  initKangaCentral = () => {
    cnvMji = document.createElement("canvas"); //central
    cnvMji.width = width;
    cnvMji.height = height;
    //mji is central motif
    ctxC = cnvMji.getContext("2d");
    ctxC.clearRect(0, 0, cnvPindo.width, cnvMji.height);
    ctxCX = cnvMji.width * (60 / 300);
    ctxCY = cnvMji.height * (30 / 150); //29
    ctxCW = cnvMji.width * (180 / 300);
    ctxCH = cnvMji.height * (80 / 150); //75

    s1.init({ src: cnvMji, dynamic: true });
  };
  initKangaCentral();

  initKangaTxtBox = () => {
    cnvTxtBox = document.createElement("canvas"); //txt box
    cnvTxtBox.width = width;
    cnvTxtBox.height = height;
    //canvas code for the text box
    ctxTxB = cnvTxtBox.getContext("2d");
    ctxTxB.clearRect(0, 0, cnvTxtBox.width, cnvTxtBox.height);
    ctxTxBX = cnvTxtBox.width * (59 / 300); //60
    ctxTxBY = cnvTxtBox.height * (29 / 150);
    ctxTxBW = cnvTxtBox.width * (182 / 300); //180
    ctxTxBH = cnvTxtBox.height * (87 / 150);

    s2.init({ src: cnvTxtBox, dynamic: true });
  };
  initKangaTxtBox();

  // text
  initKangaTxt = () => {
    cnvJina = document.createElement("canvas");
    cnvJina.width = width;
    cnvJina.height = height;
    ctxTx = cnvJina.getContext("2d");
    ctxTx.clearRect(0, 0, cnvJina.width, cnvJina.height);
    ctxTx.textAlign = "center";
    ctxTxX = cnvJina.width * (9.6 / 300);
    ctxTxY = cnvJina.height * (7.3 / 150);
    s3.init({ src: cnvJina, dynamic: true });
  };
  initKangaTxt();

  //Outlined text
  window.kangaTxtStroke = (str, colStroke, txtFont, size) => {
    txt = createText();
    txt.strokeText(`${str}`, {
      strokeStyle: colStroke,
      font: txtFont,
      fontSize: `${size}%`,
      lineWidth: "5%",
    });
    return srcRelMask(txt).scroll(0, 0.775);
  };

  //Filled text
  window.kangaTxtFill = (str, colFill, txtFont, size) => {
    txt = createText();
    txt.text(`${str}`, {
      fillStyle: colFill,
      font: txtFont,
      fontSize: `${size}%`,
      lineWidth: "10%",
    });
    return srcRelMask(txt).scroll(0, 0.775);
  };

  //Stroke over fill
  window.kangaTxtStrokeFill = (str, colStroke, colFill, txtFont, size) => {
    txt = createText();
    txt.fillStrokeText(`${str}`, {
      strokeStyle: colStroke,
      fillStyle: colFill,
      font: txtFont,
      fontSize: `${size}%`,
      lineWidth: "10%",
    });
    return srcRelMask(txt).scroll(0, 0.775);
  };

  //Fill over stroke
  window.kangaTxtFillStroke = (str, colFill, colStroke, txtFont, size) => {
    txt = createText();
    txt.strokeFillText(`${str}`, {
      font: txtFont,
      fillStyle: colFill,
      strokeStyle: colStroke,
      fontSize: `${size}%`,
      lineWidth: "10%",
    });
    return srcRelMask(txt).scroll(0, 0.775);
  };

  window.liveBorder = () => {
    return src(s0);
  };

  window.resetKangaBorderMotion = () => {
    borderFernPatternX = 0;
    borderFernPatternY = 0;
    borderBgPatternX = 0;
    borderBgPatternY = 0;
  };

  window.clearFernTrail = () => {
    borderFernPattCtx.clearRect(0, 0, tileSize, tileSize);
  };

  window.drawLiveBorder = () => {
    ctxB.clearRect(0, 0, cnvPindo.width, cnvPindo.height);
  };

  window.kangaCentralPanel = (col = "navy") => {
    ctxC.fillStyle = col;
    ctxC.fillRect(ctxCX, ctxCY, ctxCW, ctxCH);
    return src(s1);
  };
  window.kangaTxtBox = (colFill = "black", colStroke = "white") => {
    ctxTxB.fillStyle = colFill;
    ctxTxB.fillRect(ctxTxBX, ctxTxBY * 3.5, ctxTxBW, ctxTxBH / 5.5); //
    // add nice internal border
    ctxTxB.strokeStyle = colStroke;
    ctxTxB.lineWidth = 2.5;
    ctxTxB.strokeRect(
      ctxTxBX + 3.5,
      ctxTxBY * 3.5 + 3.5,
      ctxTxBW - 7.5,
      ctxTxBH / 5.5 - 7.5,
    );
    return src(s2);
  };
};
