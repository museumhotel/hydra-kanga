window.hydraKanga = async () => {
  await loadScript(
    "https://cdn.jsdelivr.net/gh/geikha/hyper-hydra@latest/hydra-text.js",
  ); //geikha's hydra text library
  await loadScript(
    "https://cdn.jsdelivr.net/gh/geikha/hydra-antlia@master/antlia-colors.js",
  ); //geikha's hydra colours library
  console.log(`hydraKanga.js loaded
    from: https://github.com/museumhotel/hydra-kanga
     `);

  window.kangaBorderPatternFractalIFS = [
    (x, y, r) => [
      r < 0.01
        ? 1
        : r < 0.86
          ? 0.85 * x - 0.02 * y - 1
          : r < 0.93
            ? -0.5 * x + 0.15 * y
            : -0.5 * x + 0.3 * y - 1,
      r < 0.01
        ? -0.55
        : r < 0.86
          ? 0.09 * x + 0.85 * y - 0.2
          : r < 0.93
            ? 0.3 * x - 0.1 * y - 0.2
            : 0.5 * x + 0.55 * y - 0.25,
    ],
    (x, y, r) => [
      //old 2
      r < 0.01
        ? 1
        : r < 0.86
          ? -0.75 * x + 0.5 * y - 0.5
          : r < 0.93
            ? -0.55 * x + 0.25 * y
            : 1.5 * x + 0.7 * y - 1,
      r < 0.01
        ? -0.55
        : r < 0.86
          ? 0.2 * x + 0.75 * y - 0.15
          : r < 0.93
            ? 0.5 * x - 0.1 * y + 0.5
            : -0.5 * x + 0.55 * y - 0.25,
    ],
    (x, y, r) => [
      //new 3
      r < 0.01
        ? 0.5
        : r < 0.86
          ? 0.15 * x + -0.5 * y - 0.05
          : r < 0.93
            ? 0.25 * x + -0.99 * y
            : 0.5 * x + -1.7 * y - 1,
      r < 0.5
        ? 0.83
        : r < 0.45
          ? 0.7 * x + -0.2 * y - -0.95
          : r < 0.3
            ? 0.1 * x - 0.75 * y + 0.9
            : 0.2 * x + -0.55 * y - 0.25,
    ],
    (x, y, r) => [
      r < 0.01
        ? 1
        : r < 0.86
          ? 0.85 * x - 0.02 * y - 1
          : r < 0.93
            ? -0.75 * x - 0.55 * y
            : -0.15 * x + 0.05 * y + 2.5,
      r < 0.01
        ? -0.14
        : r < 0.86
          ? -0.2 * x + 0.85 * y - 0.5
          : r < 0.93
            ? 0.5 * x - 0.05 * y + 0.2
            : 0.75 * x - 0.5 * y - 0.25,
    ],
    (x, y, r) => [
      r < 0.02
        ? 0
        : r < 0.84
          ? -0.85 * x + 0.5 * y
          : r < 0.93
            ? -0.5 * x + 0.5 * y - 1.5
            : 0.25 * x - 0.1 * y - 0.5,
      r < 0.02
        ? 0.05 * y
        : r < 0.84
          ? -0.15 * x + 0.9 * y + 0.5
          : r < 0.93
            ? 0.15 * x + 0.15 * y + 2.5
            : -1.5 * x - 0.55 * y + 0.25,
    ],
    (x, y, r) => [
      r < 0.01
        ? 0
        : r < 0.85
          ? 0.845 * x + 0.035 * y
          : r < 0.93
            ? 0.2 * x - 0.31 * y
            : -0.15 * x + 0.24 * y,
      r < 0.01
        ? -0.1 * y - 0.55
        : r < 0.85
          ? -0.035 * x + 0.82 * y + 1.6
          : r < 0.93
            ? 0.255 * x + 0.245 * y + 0.29
            : 0.25 * x + 0.2 * y + 0.68,
    ],
    (x, y, r) => [
      r < 0.02
        ? 0.5
        : r < 0.84
          ? 0.95 * x + 0.05 * y
          : r < 0.9
            ? -0.5 * x - 0.35 * y + 1
            : 0.5 * x + 0.3 * y - 1,
      r < 0.02
        ? -0.14
        : r < 0.84
          ? -0.25 * x + 0.75 * y - 0.1
          : r < 0.9
            ? 0.3 * x - 0.1 * y + 0.2
            : 0.3 * x + 0.25 * y + 0.25,
    ],
    (x, y, r) => [
      r < 0.01
        ? -0.49 * x + 0.101 * y + 0.9
        : r < 0.86
          ? 0.1 * x + 0.45 * y + 0.95
          : r < 0.93
            ? -0.41 * x + 0.091 * y + 0.15
            : -0.95 * x + 0.02 * y + 0.19,
      r < 0.01
        ? 0.9
        : r < 0.86
          ? 0.652 * x + 0.279 * y + 0.1
          : r < 0.93
            ? 0.85 * x + 0.5 * y + 0.049
            : 0.09 * x + 0.19 * y + 0.08,
    ],
    (x, y, r) => [
      r < 0.01
        ? 0.9
        : r < 0.85
          ? 0.845 * x + 0.5 * y
          : r < 0.93
            ? 0.2 * x - 0.31 * y
            : -0.915 * x + 0.24 * y,
      r < 0.01
        ? 0.1 * y - 0.955
        : r < 0.85
          ? -0.5 * x + 0.82 * y + 0.6
          : r < 0.93
            ? 0.9255 * x + 0.245 * y + 0.9
            : 0.25 * x + 0.2 * y + 0.68,
    ],
    (x, y, r) => [
      r < 0.01
        ? 0.1
        : r < 0.86
          ? 0.85 * x - 0.02 * y - 0.2
          : r < 0.93
            ? -0.5 * x + 0.15 * y
            : -0.95 * x + 0.3 * y - 0.1,
      r < 0.01
        ? -0.55
        : r < 0.86
          ? 0.09 * x + 0.85 * y - 0.52
          : r < 0.93
            ? 0.3 * x - 0.1 * y + 0.092
            : 0.5 * x + 0.55 * y - 0.925,
    ],
    (x, y, r) => [
      r < 0.01
        ? 0.1
        : r < 0.86
          ? 0.85 * x - 0.02 * y - 0.2
          : r < 0.93
            ? -0.5 * x + 0.15 * y
            : -0.5 * x + 0.3 * y - 0.1,
      r < 0.01
        ? -0.55
        : r < 0.86
          ? 0.09 * x + 0.85 * y - 0.52
          : r < 0.93
            ? 0.3 * x - 0.1 * y + 0.92
            : 0.5 * x + 0.55 * y - 0.25,
    ],
    (x, y, r) => [
      r < 0.01
        ? 0.9
        : r < 0.85
          ? 0.845 * x + 0.5 * y
          : r < 0.93
            ? 0.2 * x - 0.31 * y
            : -0.15 * x + 0.24 * y,
      r < 0.01
        ? 0.1 * y - 0.955
        : r < 0.85
          ? -0.5 * x + 0.82 * y + 0.6
          : r < 0.93
            ? 0.255 * x + 0.245 * y + 0.29
            : 0.25 * x + 0.2 * y + 0.68,
    ],
    (x, y, r) => [
      r < 0.01
        ? 0.9
        : r < 0.85
          ? 0.845 * x + 0.5 * y
          : r < 0.93
            ? 0.2 * x - 0.31 * y
            : -0.915 * x + 0.24 * y,
      r < 0.01
        ? 0.1 * y - 0.955
        : r < 0.85
          ? -0.5 * x + 0.82 * y + 0.6
          : r < 0.93
            ? 0.9255 * x + 0.245 * y + 0.9
            : 0.25 * x + 0.92 * y + 0.8,
    ],
  ];

  //gold ground background
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
    // 'frame' for the border, a rectangle with no fill.
    ctxB.strokeStyle = col;
    ctxB.strokeRect(ctxBX, ctxBY, ctxBW, ctxBH);

    // internal border pattern definition
    // borderPattCtx.fillStyle = `${borderPattBgCol}` // effectively background colour for the border
    borderPattCtx.fillStyle = col; // effectively background colour for the border
    borderPattCtx.fillRect(0, 0, tileSize, tileSize);
    // borderPatternY = 0;
    return src(s0);
  };

  tileSize = cnvPindo.width / 12;
  borderPatternCnv.width = tileSize;
  borderPatternCnv.height = tileSize;
  // borderPattCtx.fillRect(0, 0, tileSize, tileSize);
  borderPatternY = 0;

  selectFractalIFS = (shapeIndex = 6) => {
    if (shapeIndex === "r") {
      return Math.floor(Math.random() * kangaBorderPatternFractalIFS.length);
    }
    return Math.max(
      0,
      Math.min(kangaBorderPatternFractalIFS.length - 1, shapeIndex - 1),
    );
  };

  drawKangaBorderPattern = (col, shapeIndex = 6) => {
    const ifs = kangaBorderPatternFractalIFS[selectFractalIFS(shapeIndex)];
    ctxB.clearRect(0, 0, cnvPindo.width, cnvPindo.height);
    // borderPattCtx.clearRect(0, 0, tileSize, tileSize);

    //barnsley fern fractal shape generator
    // borderPattCtx.fillStyle = `${borderPattFillCol}`

    borderPattCtx.fillStyle = col;
    let cX = 0,
      cY = 0;
    const fernPoint = Math.max(0.5, tileSize * 0.01);
    for (let i = 0; i < 10; i++) {
      [cX, cY] = ifs(cX, cY, Math.random(1));
      borderPattCtx.fillRect(
        tileSize * (0.5 + cX / 4),
        tileSize * (0.5 - cY / 4),
        fernPoint,
        fernPoint,
      );
    }
    //pattern animation config
    animatedPattern = ctxB.createPattern(borderPatternCnv, "repeat");
    animatedPattern.setTransform(new DOMMatrix().translate(0, borderPatternY));
    ctxB.strokeStyle = animatedPattern;
    ctxB.lineWidth = ctxBLW;
    ctxB.strokeRect(ctxBX, ctxBY, ctxBW, ctxBH);
    borderPatternY = (borderPatternY - 1 + tileSize) % tileSize;
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

  window.liveBorder = (col = "white") => {
    setKangaBorderCol(col);
    return src(s0);
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

  //gold ground background
  // goldGround(beige)
  // osc(5)
  // .layer(
  // voronoi(1).color_(white).mask(src(s0).modulate(voronoi(1)))
  //border
  //   src(s0).modulatePixelate(noise(5),100,100)
  // setKangaBorderCol("white")
  //drawBorderPattern(col)
  // initBorderBg("lavender")
  // .modulate(voronoi(1)) //.modulate(osc(50)))

  //central motif
  // layer(
  //   src(s1)
  //     //          .mask(osc([10,999,20,.1,99],.1).colorama(.001).layer(src(s0).sub(shape(4).modulatePixelate(voronoi(1,5),2,5).modulateScale(noise(.1),[99,.75]))))
  //     .layer(
  //       osc(50)
  //         .modulate(src(s0))
  //         .add(src(s1).sub(noise(5).color_(white))),
  //     ),
  // )
  //   //         ).layer(solid(1,1,1).add(src(s1).sub(noise(5).color_(white))))
  //   //.modulate(osc(5)))
  //   //Text Border
  //   //   .layer(src(s2).mult(voronoi(10).modulate(src(s0))))
  //   .layer(src(s2).mult(voronoi(10).modulate(src(s0))))
  //   //text
  //   .layer(
  //     src(s3)
  //       //            .layer(kangaTxtStrokeFill("JUST JUSt just").scroll(0,-.09)
  //       //            .layer(kangaTxtStrokeFill("The quick brown fox jumped over the lazy sheep dog").scroll(0,-.09)
  //       .modulateScrollX(osc([2, -5, 1]), [-0.5, 0.1, 0.5, -1])
  //       .modulate(src(s0)),
  //   )
  //   // ,
  //   //.modulate(noise(1)))
  //   // )
  //   // )
  //   .out();
  //.modulateHue(osc().kaleid(0))
};
