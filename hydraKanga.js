window.hydraKanga = async () => {
  await loadScript(
    "https://cdn.jsdelivr.net/gh/geikha/hyper-hydra@latest/hydra-text.js",
  ); //text library
  await loadScript(
    "https://cdn.jsdelivr.net/gh/geikha/hydra-antlia@master/antlia-colors.js",
  ); //colours library

  //set colours
  // assignCanvasCols = () => {
  //   // colour assignments
  //   borderPattBgCol = "black"
  //   borderPattFillCol = "crimson"
  //   centralBgCol = "navy"
  //   txtBorderBgCol = "darkgreen"
  //   txtBorderBgStroke = "chartreuse"
  // }
  // assignCanvasCols()
  initKangaColours = () => {
    // border colours
    borderPattBgCol = "black";
    borderPattFillCol = "white";

    // central frame bg
    centralBgCol = "white";

    // text box colours
    txtBorderBgCol = "black";
    txtBorderBgStroke = "white";

    // text colour assignments
    txtStrokeStyleCol = "black";
    txtFillStyleCol = "white";
  };
  // initKangaColours()

  // make sure to comment out after first call
  // initgoldGroundBg(col)
  goldGround = (col) => {
    return shape(4, 1, 0).layer(noise(999, 1).invert().luma()).color_(col);
  };

  initKangaBorder = () => {
    cnvPindo = document.createElement("canvas"); //border
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
    //   ctxB.strokeStyle = col
    //   ctxB.strokeRect(ctxBX,ctxBY,ctxBW,ctxBH)

    s0.init({ src: cnvPindo, dynamic: true });
  };
  initKangaBorder();

  setKangaBorderCol = (col) => {
    ctxB.strokeStyle = col;
    ctxB.strokeRect(ctxBX, ctxBY, ctxBW, ctxBH);
    return src(s0);
  };
  // setKangaBorderCol("silver")

  // initKangaBorderPattern(patternId)
  // initKangaCentral(col)
  // initKangaTxtBox(col)
  // initKangaTxt()

  defineKangaCanvases = () => {
    // load canvases
    // cnvPindo = document.createElement("canvas") //border
    borderPatternCnv = document.createElement("canvas"); //border pattern
    cnvMji = document.createElement("canvas"); //central
    cnvTxtBorder = document.createElement("canvas"); //txt border
    cnvJina = document.createElement("canvas"); //text

    // assign canvas dimensions
    // cnvPindo.width = width
    // cnvPindo.height = height
    cnvMji.width = width;
    cnvMji.height = height;
    cnvTxtBorder.width = width;
    cnvTxtBorder.height = height;
    cnvJina.width = width;
    cnvJina.height = height;
    tileSize = cnvPindo.width / 12;
    borderPatternCnv.width = tileSize;
    borderPatternCnv.height = tileSize;

    // border and border pattern
    // ctxB = cnvPindo.getContext("2d")
    borderPattCtx = borderPatternCnv.getContext("2d");

    // define border canvas proportions
    // ctxBX = cnvPindo.width * (50 / 300)
    // ctxBY = cnvPindo.height * (25 / 150)
    // ctxBW = cnvPindo.width * (200 / 300)
    // ctxBH = cnvPindo.height * (95 / 150)
    // ctxBLW = cnvPindo.width * (30 / 300)

    // internal border pattern definition
    // borderPattCtx.fillStyle = `${borderPattBgCol}` // effectively background colour for the border
    borderPattCtx.fillRect(0, 0, tileSize, tileSize);
    borderPatternY = 0;

    //mji is central motif
    ctxC = cnvMji.getContext("2d");
    ctxCX = cnvMji.width * (60 / 300);
    ctxCY = cnvMji.height * (29 / 150);
    ctxCW = cnvMji.width * (180 / 300);
    ctxCH = cnvMji.height * (75 / 150);
    // ctxC.fillStyle = `${centralBgCol}`
    ctxC.fillRect(ctxCX, ctxCY, ctxCW, ctxCH); // position and size relative to canvas

    //canvas code for the text border
    ctxTxB = cnvTxtBorder.getContext("2d");
    ctxTxBX = cnvTxtBorder.width * (60 / 300);
    ctxTxBY = cnvTxtBorder.height * (29 / 150);
    ctxTxBW = cnvTxtBorder.width * (180 / 300);
    ctxTxBH = cnvTxtBorder.height * (87 / 150);
    // ctxTxB.fillStyle = `${txtBorderBgCol}`
    // ctxTxB.strokeStyle = `${txtBorderBgStroke}`
    ctxTxB.lineWidth = 2.5;
    ctxTxB.fillRect(ctxTxBX, ctxTxBY * 3.5, ctxTxBW, ctxTxBH / 5.5); // position and size relative to canvas
    ctxTxB.strokeRect(
      ctxTxBX + 3.5,
      ctxTxBY * 3.5 + 3.5,
      ctxTxBW - 7.5,
      ctxTxBH / 5.5 - 7.5,
    );
  };

  drawKangaBorderPattern = () => {
    ctxB.clearRect(0, 0, cnvPindo.width, cnvPindo.height);

    //barnsley fern fractal shape generator
    // borderPattCtx.fillStyle = `${borderPattFillCol}`
    let cX = 0,
      cY = 0;
    const fernPoint = Math.max(0.5, tileSize * 0.01);
    for (let i = 0; i < 10; i++) {
      const r = Math.random(1),
        x = cX,
        y = cY;

      //custom fern IFS matrix
      cX =
        r < 0.02
          ? 0.5
          : r < 0.84
            ? 0.95 * x + 0.05 * y
            : r < 0.9
              ? -0.5 * x - 0.35 * y + 1
              : -0.15 * x + 0.28 * y;
      cY =
        r < 0.02
          ? -0.14
          : r < 0.84
            ? -0.25 * x + 0.75 * y - 0.1
            : r < 0.9
              ? 0.3 * x - 0.1 * y + 0.2
              : 0.3 * x + 0.25 * y + 0.25;
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

  defineKangaCanvases();

  assignKangaBorderPattern = (col, shapeIndex) => {};

  // Hydra update
  update = () => {
    // background colour assignments
    //   borderPattBgCol = "black"
    //   borderPattFillCol = "white"
    //   centralBgCol = "white"
    //   txtBorderBgCol = "darkgreen"
    //   txtBorderBgStroke = "chartreuse"
    // text colour assignments
    //   txtStrokeStyleCol = "black"
    //   txtFillStyleCol = "white"
    // draw canvas patterns
    // 	drawKangaBorderPattern()
  };

  //jina is kanga text
  ctxTx = cnvJina.getContext("2d");
  ctxTx.textAlign = "center";

  ctxTxX = cnvJina.width * (9.6 / 300);
  ctxTxY = cnvJina.height * (7.3 / 150);
  // txStrokeCol = ctxTx.strokeStyle = `${txtStrokeStyleCol}`
  // txFillCol = ctxTx.fillStyle = `${txtFillStyleCol}`
  // ctxTxFont = "sans-serif"
  ctxTxFont = "cursive";

  //Outlined text
  kangaTxtStroke = (str) => {
    txt = createText();
    txt.strokeText(`${str}`, {
      font: ctxTxFont,
      fontSize: `45%`,
      strokeStyle: txStrokeCol,
    });
    return srcRelMask(txt).scroll(0, 0.85);
  };

  //Filled text
  kangaTxtFill = (str) => {
    txt = createText();
    txt.text(`${str}`, {
      font: ctxTxFont,
      fontSize: `45%`,
      fillStyle: txFillCol,
    });
    return srcRelMask(txt).scroll(0, 0.85);
  };

  //Stroke over fill
  kangaTxtFillStroke = (str) => {
    txt = createText();
    txt.fillStrokeText(`${str}`, {
      font: ctxTxFont,
      fontSize: `45%`,
      fillStyle: txFillCol,
      strokeStyle: txStrokeCol,
    });
    return srcRelMask(txt).scroll(0, 0.85);
  };

  //Fill over stroke
  kangaTxtStrokeFill = (str) => {
    txt = createText();
    txt.strokeFillText(`${str}`, {
      font: ctxTxFont,
      fontSize: `45%`,
      fillStyle: txFillCol,
      strokeStyle: txStrokeCol,
    });
    return srcRelMask(txt).scroll(0, 0.85);
  };

  initHydraKangaCanvas = () => {
    //   s0.init({src:cnvPindo})
    //   s1.init({src:cnvMji})
    //   s2.init({src:cnvTxtBorder})
    //   s3.init({src:cnvJina})
  };

  initHydraKangaCanvas();

  // goldGround = (col) => {
  //   return shape(4,1,0).layer(noise(999,1).invert().luma()).color_(col)
  // }

  //gold ground background
  goldGround(beige)
    // osc(5)
    .layer(
      // voronoi(1).color_(white).mask(src(s0).modulate(voronoi(1)))
      //border
      //   src(s0).modulatePixelate(noise(5),100,100)
      setKangaBorderCol("orange")
        //.modulate(voronoi(1))//.modulate(osc(50)))

        //central motif
        .layer(
          src(s1)
            //          .mask(osc([10,999,20,.1,99],.1).colorama(.001).layer(src(s0).sub(shape(4).modulatePixelate(voronoi(1,5),2,5).modulateScale(noise(.1),[99,.75]))))
            .layer(
              osc(50)
                .modulate(src(s0))
                .add(src(s1).sub(noise(5).color_(white))),
            ),
        )
        //         ).layer(solid(1,1,1).add(src(s1).sub(noise(5).color_(white))))
        //.modulate(osc(5)))
        //Text Border
        //   .layer(src(s2).mult(voronoi(10).modulate(src(s0))))
        .layer(src(s2).mult(voronoi(10).modulate(src(s0))))
        //text
        .layer(
          src(s3)
            //            .layer(kangaTxtStrokeFill("JUST JUSt just").scroll(0,-.09)
            //            .layer(kangaTxtStrokeFill("The quick brown fox jumped over the lazy sheep dog").scroll(0,-.09)
            .modulateScrollX(osc([2, -5, 1]), [-0.5, 0.1, 0.5, -1])
            .modulate(src(s0)),
        ),
      //.modulate(noise(1)))
    )
    // )
    .out();
  //.modulateHue(osc().kaleid(0))
};
