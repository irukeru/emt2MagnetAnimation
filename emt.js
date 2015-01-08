        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");

	var NSNS = true;
	var magnetDirection = true;

	var magnetImage = new Image();
	magnetImage.src = "/emt/magnet.png";

	var arrowImage = new Image();
	arrowImage.src = "/emt/arrow_reverse.png";

	var arrowImageReverse = new Image();
	arrowImageReverse.src = "/emt/arrow.png";

        var canvasOffset = $("canvas").offset();
        var offsetX = canvasOffset.left;
        var offsetY = canvasOffset.top;

        // animation variables
        var timer;
        var points;
	var pathArrow_1 = new Array();
	var pathArrow_1_B = new Array();
	var pathArrow_1_C = new Array();
	var pathArrow_2 = new Array();
	var pathArrow_2_B = new Array();
	var pathArrow_2_C = new Array();
	var pathArrow_3 = new Array();
	var pathArrow_3_B = new Array();
	var pathArrow_3_C = new Array();
	var pathArrow_4 = new Array();
	var pathArrow_4_B = new Array();
	var pathArrow_4_C = new Array();
	var pathArrow_5 = new Array();
	var pathArrow_5_B = new Array();
	var pathArrow_5_C = new Array();
	var pathArrow_6 = new Array();
	var pathArrow_6_B = new Array();
	var pathArrow_6_C = new Array();
	var pathArrow_7 = new Array();
	var pathArrow_8 = new Array();
	var pathArrow_9 = new Array();
	var pathArrow_10 = new Array();
	var pathArrow_11 = new Array();
	var pathArrow_12 = new Array();
	var pathArrow_13 = new Array();
	var pathArrow_14 = new Array();


        var currentFrame;
	var arrowFrame_A  = 0;
	var arrowFrame_AB = 0;
	var arrowFrame_AC = 0;
	var arrowFrame_AD = 0;
	var arrowFrame_B = 0;
	var arrowFrame_BB = 0;
	var arrowFrame_BC = 0;
	var arrowFrame_C = 0;
	var arrowFrame_CB = 0;
	var arrowFrame_CC = 0;
	var arrowFrame_D = 0;
	var arrowFrame_DB = 0;
	var arrowFrame_DC = 0;
	var arrowFrame_E = 0;
	var arrowFrame_EB = 0;
	var arrowFrame_EC = 0;
	var arrowFrame_F = 0;
	var arrowFrame_FB = 0;
	var arrowFrame_FC = 0;
	var arrowFrame_G = 0;
	var arrowFrame_H = 0;
	var arrowFrame_I = 0;
	var arrowFrame_J = 0;
	var arrowFrame_K = 0;
	var arrowFrame_L = 0;
	var arrowFrame_M = 0;
	var arrowFrame_N = 0;


	function prepareArrowPath_Eliptic(centerX, centerY, r_1, r_2, rotAngle, startAngle, stopAngle) {
		var k = 0;
		var l = 0;
		var pathArrow = new Array();
                for (var i = startAngle * Math.PI; i < stopAngle * Math.PI; i += 0.01 ) {
                    xPos = centerX - (r_1 * Math.sin(i)) * Math.sin(rotAngle * Math.PI) + (r_2 * Math.cos(i)) * Math.cos(rotAngle * Math.PI);
                    yPos = centerY + (r_2 * Math.cos(i)) * Math.sin(rotAngle * Math.PI) + (r_1 * Math.sin(i)) * Math.cos(rotAngle * Math.PI);
		    if (k % 10 == 0) {
	                    pathArrow[l] = new arrowPath();
	                    pathArrow[l].x = xPos;
        	            pathArrow[l].y = yPos;
			    l++;
		    }
                    k++;
                }
		return pathArrow.reverse();
	}

	function prepareArrowPath_2(centerX, centerY) {
		var k = 0;
		var l = 0;
		var pathArrow = new Array();
                for (var i = 1.1 * Math.PI; i < 1.9 * Math.PI; i += 0.01 ) {
                    xPos = centerX - (49 * Math.sin(i)) * Math.sin(1.0 * Math.PI) + (90 * Math.cos(i)) * Math.cos(1.0 * Math.PI);
                    yPos = centerY + (90 * Math.cos(i)) * Math.sin(1.0 * Math.PI) + (49 * Math.sin(i)) * Math.cos(1.0 * Math.PI);

		    if (k % 10 == 0) {
	                    pathArrow[l] = new arrowPath();
	                    pathArrow[l].x = xPos;
        	            pathArrow[l].y = yPos;
			    l++;
		    }
                    k++;
                }
		return pathArrow;
	}

	function prepareArrowPath_3(centerX, centerY) {
		var k = 0;
		var l = 0;
		var pathArrow = new Array();
                for (var i = 0.0 * Math.PI; i < 1.0 * Math.PI; i += 0.01 ) {
                    xPos = centerX - (79 * Math.sin(i)) * Math.sin(1.0 * Math.PI) + (90 * Math.cos(i)) * Math.cos(1.0 * Math.PI);
                    yPos = centerY + (90 * Math.cos(i)) * Math.sin(1.0 * Math.PI) + (79 * Math.sin(i)) * Math.cos(1.0 * Math.PI);

		    if (k % 10 == 0) {
	                    pathArrow[l] = new arrowPath();
	                    pathArrow[l].x = xPos;
        	            pathArrow[l].y = yPos;
			    l++;
		    }
                    k++;
                }
		return pathArrow;
	}

	function prepareArrowPath_5(centerX, centerY) {
		var k = 0;
		var l = 0;
		var pathArrow = new Array();
                d = 150;
                ctx.beginPath();
                for (var i = - (d / 2); i < (d / 2); i += 0.01 ) {
                    xPos = centerX + i;
                    yPos = centerY;
		    if (k % 450 == 0) {
	                    pathArrow[l] = new arrowPath();
	                    pathArrow[l].x = xPos;
        	            pathArrow[l].y = yPos;
			    l++;
		    }
                    k++;
                }
		return pathArrow.reverse();
	}

	function prepareArrowPath_6(centerX, centerY) {
		var k = 0;
		var l = 0;
		var pathArrow = new Array();
                d = 150;
                ctx.beginPath();
                for (var i = - (d / 2); i < (d / 2); i += 0.01 ) {
                    xPos = centerX + i;
                    yPos = centerY;
		    if (k % 450 == 0) {
	                    pathArrow[l] = new arrowPath();
	                    pathArrow[l].x = xPos;
        	            pathArrow[l].y = yPos;
			    l++;
		    }
                    k++;
                }
		return pathArrow.reverse();
	}

	function animateArrowsReverse() {
		if (NSNS == true)
			return;

               ctx.clearRect(0, 0, canvas.width, canvas.height);

                // group 1
                drawPath_All(200, 300, 49, 90, 1.0, 0.13, 0.87);
		drawPath_All(590, 300, 49, 90, 1.0, 0.13, 0.87);
                // group 2
                drawPath_All(200, 320, 49, 90, 1.0, 1.1, 1.9);
                drawPath_All(590, 320, 49, 90, 1.0, 1.1, 1.9);
                // group 3
                drawPath_All(200, 280, 79, 90, 1.0, 0.0, 1.0);
                drawPath_All(590, 280, 79, 90, 1.0, 0.0, 1.0);	
                // group 4
                drawPath_All(200, 330, 79, 90, 1.0, 1.02, 2.0);
                drawPath_All(590, 330, 79, 90, 1.0, 1.02, 2.0);
                // group 7
                drawPath_All(61, 226, 41, 70, 0.3, 0.09, 0.79);
                drawPath_All(460, 226, 41, 70, 0.4, 0.09, 0.79);
                // group 8
                drawPath_All(727, 386, 41, 80, 1.2, 0.25, 0.80);
                drawPath_All(327, 389, 41, 75, 1.38, 0.15, 0.80);
                // group 9
                drawPath_All(725, 235, 41, 70, 1.8, 0.09, 0.79);
                drawPath_All(323, 235, 41, 70, 1.65, 0.09, 0.79);
                // group 10
                drawPath_All(50, 397, 37, 83, 0.68, 0.42, 0.97);
                drawPath_All(470, 410, 50, 95, 0.52, 0.42, 0.97);

                drawPath_5(15, 295);
                drawPath_5(15, 320);
                drawPath_5(775, 295);
                drawPath_5(775, 320);

	
        	var point_1B = pathArrow_1B[arrowFrame_AB++];
	        var point_1C = pathArrow_1C[arrowFrame_AC++];
	        var point_2B = pathArrow_2_B[arrowFrame_BB++];
        	var point_2C = pathArrow_2_C[arrowFrame_BC++];
                var point_3B = pathArrow_3_B[arrowFrame_CB++];
                var point_3C = pathArrow_3_C[arrowFrame_CC++];
                var point_4B = pathArrow_4_B[arrowFrame_DB++];
                var point_4C = pathArrow_4_C[arrowFrame_DC++];
                var point_5B = pathArrow_5_B[arrowFrame_EB++];
                var point_5C = pathArrow_5_C[arrowFrame_EC++];
                var point_6B = pathArrow_6_B[arrowFrame_FB++];
                var point_6C = pathArrow_6_C[arrowFrame_FC++];
                var point_7 = pathArrow_7[arrowFrame_G++];
                var point_8 = pathArrow_8[arrowFrame_H++];
                var point_9 = pathArrow_9[arrowFrame_I++];
                var point_10 = pathArrow_10[arrowFrame_J++];
                var point_11 = pathArrow_11[arrowFrame_K++];
                var point_12 = pathArrow_12[arrowFrame_L++];
                var point_13 = pathArrow_13[arrowFrame_M++];
                var point_14 = pathArrow_14[arrowFrame_N++];

                drawOtherArrow(point_1B.x-10, point_1B.y - 10);
                drawOtherArrowReverse(point_1C.x - 10, point_1C.y - 10);
                drawOtherArrowReverse(point_2B.x - 9, point_2B.y - 10);
                drawOtherArrow(point_2C.x - 14, point_2C.y - 10);
                drawOtherArrowReverse(point_3B.x - 5, point_3B.y - 10);
                drawOtherArrow(point_3C.x - 5, point_3C.y - 10);
                drawOtherArrowReverse(point_4B.x - 5, point_4B.y - 10);
                drawOtherArrow(point_4C.x - 5, point_4C.y - 10);
                drawOtherArrow(point_5B.x, point_5B.y - 9);
                drawOtherArrowReverse(point_5C.x, point_5C.y - 9);
                drawOtherArrow(point_6B.x, point_6B.y - 9);
                drawOtherArrowReverse(point_6C.x, point_6C.y - 9);
                drawOtherArrow(point_7.x, point_7.y - 9);
                drawOtherArrowReverse(point_8.x, point_8.y - 7);
                drawOtherArrowReverse(point_9.x, point_9.y - 7);
                drawOtherArrow(point_10.x, point_10.y - 11);
                drawOtherArrowReverse(point_11.x-5, point_11.y - 11);
                drawOtherArrow(point_12.x-5, point_12.y - 11);
                drawOtherArrow(point_13.x-5, point_13.y - 11);
                drawOtherArrowReverse(point_14.x-8, point_14.y - 11);


		drawMagnetB(700,280);
		drawMagnetA(90,280);


                if (arrowFrame_EB >= pathArrow_5_B.length)
                    arrowFrame_EB = 0;
   
                if (arrowFrame_EC >= pathArrow_5_C.length)
                    arrowFrame_EC = 0;

                if (arrowFrame_FB >= pathArrow_6_B.length)
                    arrowFrame_FB = 0;
 
                if (arrowFrame_FC >= pathArrow_6_C.length)
                    arrowFrame_FC = 0;

                if (arrowFrame_G >= pathArrow_7.length)
                     arrowFrame_G = 0;

                if (arrowFrame_H >= pathArrow_8.length)
                     arrowFrame_H = 0;

                if (arrowFrame_I >= pathArrow_9.length)
                    arrowFrame_I = 0;

                if (arrowFrame_J >= pathArrow_10.length)
                    arrowFrame_J = 0;

                if (arrowFrame_K >= pathArrow_11.length)
                    arrowFrame_K = 0;

                if (arrowFrame_L >= pathArrow_12.length)
                    arrowFrame_L = 0;

                if (arrowFrame_M >= pathArrow_13.length)
                    arrowFrame_M = 0;

                if (arrowFrame_N >= pathArrow_14.length)
                    arrowFrame_N = 0;

                if (arrowFrame_CB >= pathArrow_3_B.length)
                    arrowFrame_CB = 0;
 
                if (arrowFrame_CC >= pathArrow_3_C.length)
                    arrowFrame_CC = 0;
 
                if (arrowFrame_DB >= pathArrow_4_B.length)
                    arrowFrame_DB = 0;

                if (arrowFrame_DC >= pathArrow_4_C.length)
                    arrowFrame_DC = 0;

                if (arrowFrame_BB >= pathArrow_2_B.length)
                    arrowFrame_BB = 0;

                if (arrowFrame_BC >= pathArrow_2_C.length)
                    arrowFrame_BC = 0;


	        if (arrowFrame_AC >= pathArrow_1C.length)
        	    arrowFrame_AC = 0;

                if (arrowFrame_AB < pathArrow_1B.length && NSNS == false) {
                    timer = setTimeout(animateArrowsReverse, 100);
                }
            	else if (NSNS == false){
                	arrowFrame_AB = 0;
	                timer = setTimeout(animateArrowsReverse, 100);
                }


	}


        function animateArrows() {
	    if (NSNS == false)
		return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            var point_1 = pathArrow_1[arrowFrame_A++];
	    var point_1B = pathArrow_1B[arrowFrame_AB++];
	    var point_1C = pathArrow_1C[arrowFrame_AC++];
	    var point_2 = pathArrow_2[arrowFrame_B++];
	    var point_2B = pathArrow_2_B[arrowFrame_BB++];
	    var point_2C = pathArrow_2_C[arrowFrame_BC++];
	    var point_3 = pathArrow_3[arrowFrame_C++];
	    var point_3B = pathArrow_3_B[arrowFrame_CB++];
	    var point_3C = pathArrow_3_C[arrowFrame_CC++];
	    var point_4 = pathArrow_4[arrowFrame_D++];
	    var point_4B = pathArrow_4_B[arrowFrame_DB++];
	    var point_4C = pathArrow_4_C[arrowFrame_DC++];
	    var point_5 = pathArrow_5[arrowFrame_E++];
	    var point_5B = pathArrow_5_B[arrowFrame_EB++];
	    var point_5C = pathArrow_5_C[arrowFrame_EC++];
	    var point_6 = pathArrow_6[arrowFrame_F++];
	    var point_6B = pathArrow_6_B[arrowFrame_FB++];
	    var point_6C = pathArrow_6_C[arrowFrame_FC++];
	    var point_7 = pathArrow_7[arrowFrame_G++];
	    var point_8 = pathArrow_8[arrowFrame_H++];
	    var point_9 = pathArrow_9[arrowFrame_I++];
	    var point_10 = pathArrow_10[arrowFrame_J++];

            drawArrows(point_1.x - 7, point_1.y - 9);
	    drawOtherArrowReverse(point_1B.x-10, point_1B.y - 10);
	    drawOtherArrowReverse(point_1C.x - 10, point_1C.y - 10);
	    drawOtherArrow(point_2.x - 5, point_2.y - 10);
	    drawOtherArrowReverse(point_2B.x - 9, point_2B.y - 10);
	    drawOtherArrowReverse(point_2C.x - 14, point_2C.y - 10);
	    drawOtherArrow(point_3.x - 5, point_3.y - 10);
	    drawOtherArrowReverse(point_3B.x - 5, point_3B.y - 10);
	    drawOtherArrowReverse(point_3C.x - 5, point_3C.y - 10);
	    drawOtherArrow(point_4.x - 5, point_4.y + 1);
	    drawOtherArrowReverse(point_4B.x - 5, point_4B.y - 10);
	    drawOtherArrowReverse(point_4C.x - 5, point_4C.y - 10);
	    drawOtherArrow(point_5.x, point_5.y - 9);
	    drawOtherArrow(point_5B.x, point_5B.y - 9);
	    drawOtherArrow(point_5C.x, point_5C.y - 9);
	    drawOtherArrow(point_6.x, point_6.y - 9);
	    drawOtherArrow(point_6B.x, point_6B.y - 9);
	    drawOtherArrow(point_6C.x, point_6C.y - 9);
	    drawOtherArrow(point_7.x, point_7.y - 9);
	    drawOtherArrow(point_8.x, point_8.y - 7);
	    drawOtherArrow(point_9.x, point_9.y - 7);
	    drawOtherArrow(point_10.x, point_10.y - 11);
	    drawMagnetA(90,280);
            drawMagnetA(470,280);

	    // group 1
            drawPath_All(395, 300, 49, 90, 1.0, 0.13, 0.87);
            drawPath_All(200, 300, 49, 90, 1.0, 0.13, 0.87);
            drawPath_All(590, 300, 49, 90, 1.0, 0.13, 0.87);
	    // group 2
            drawPath_All(200, 320, 49, 90, 1.0, 1.1, 1.9);
            drawPath_All(395, 320, 49, 90, 1.0, 1.1, 1.9);
            drawPath_All(590, 320, 49, 90, 1.0, 1.1, 1.9);
	    // group 3
            drawPath_All(395, 280, 79, 90, 1.0, 0.0, 1.0);
            drawPath_All(200, 280, 79, 90, 1.0, 0.0, 1.0);
            drawPath_All(590, 280, 79, 90, 1.0, 0.0, 1.0);
	    // group 4
            drawPath_All(395, 330, 79, 90, 1.0, 1.02, 2.0);
            drawPath_All(200, 330, 79, 90, 1.0, 1.02, 2.0);
            drawPath_All(590, 330, 79, 90, 1.0, 1.02, 2.0);
	    // group 7
	    drawPath_All(61, 226, 41, 70, 0.3, 0.09, 0.79);
	    // group 8
	    drawPath_All(727, 386, 41, 80, 1.2, 0.25, 0.80);
	    // group 9
	    drawPath_All(725, 235, 41, 70, 1.8, 0.09, 0.79);
	    // group 10
	    drawPath_All(50, 397, 37, 83, 0.68, 0.42, 0.97);
	
            drawPath_5(395, 295);
            drawPath_5(395, 320);
            drawPath_5(15, 295);
            drawPath_5(15, 320);
            drawPath_5(775, 295);
            drawPath_5(775, 320);
 
	    if (arrowFrame_E >= pathArrow_5.length)
		arrowFrame_E = 0;

	    if (arrowFrame_EB >= pathArrow_5_B.length)
		arrowFrame_EB = 0;

	    if (arrowFrame_EC >= pathArrow_5_C.length)
		arrowFrame_EC = 0;

	    if (arrowFrame_F >= pathArrow_6.length)
		arrowFrame_F = 0;

	    if (arrowFrame_G >= pathArrow_7.length)
		arrowFrame_G = 0;

	    if (arrowFrame_H >= pathArrow_8.length)
		arrowFrame_H = 0;

	    if (arrowFrame_I >= pathArrow_9.length)
		arrowFrame_I = 0;

	    if (arrowFrame_J >= pathArrow_10.length)
		arrowFrame_J = 0;

	    if (arrowFrame_FB >= pathArrow_6_B.length)
		arrowFrame_FB = 0;

	    if (arrowFrame_FC >= pathArrow_6_C.length)
		arrowFrame_FC = 0;

	    if (arrowFrame_B >= pathArrow_2.length)
		arrowFrame_B = 0;

	    if (arrowFrame_C >= pathArrow_3.length)
		arrowFrame_C = 0;

	    if (arrowFrame_CB >= pathArrow_3_B.length)
		arrowFrame_CB = 0;

	    if (arrowFrame_CC >= pathArrow_3_C.length)
		arrowFrame_CC = 0;

	    if (arrowFrame_D >= pathArrow_4.length)
		arrowFrame_D = 0;

	    if (arrowFrame_DB >= pathArrow_4_B.length)
		arrowFrame_DB = 0;

	    if (arrowFrame_DC >= pathArrow_4_C.length)
		arrowFrame_DC = 0;

	    if (arrowFrame_BB >= pathArrow_2_B.length)
		arrowFrame_BB = 0;

	    if (arrowFrame_BC >= pathArrow_2_C.length)
		arrowFrame_BC = 0;

	    if (arrowFrame_AB >= pathArrow_1B.length)
		arrowFrame_AB = 0;

	    if (arrowFrame_AC >= pathArrow_1C.length)
		arrowFrame_AC = 0;

            if (arrowFrame_A < pathArrow_1.length && NSNS == true) {
                timer = setTimeout(animateArrows, 100);
            } 
	    else if (NSNS == true){
		arrowFrame_A = 0;
                timer = setTimeout(animateArrows, 100);
	    }



        }

	function drawArrows(x,y) {
		ctx.beginPath();
		ctx.drawImage(arrowImage, x,y);
		ctx.stroke;
	}

	function drawOtherArrow(x,y) {
		ctx.beginPath();
		ctx.drawImage(arrowImage, x,y);
		ctx.stroke;
	}

	function drawOtherArrowReverse(x,y) {
		ctx.beginPath();
		ctx.drawImage(arrowImageReverse, x,y);
		ctx.stroke;
	}


        function drawMagnetA(x, y) {
            ctx.beginPath();
            ctx.drawImage(magnetImage, x, y);
            ctx.stroke();
        }


        function drawMagnetB(x, y) {
            ctx.save();
	    ctx.scale(-1, 1);
            ctx.drawImage(magnetImage, -1 * x, y);
            ctx.restore();
        }

	var arrowPath = function () {var x = 0; var y = 0;};


	function drawPath_All(centerX, centerY, r1, r2, rotAngle, startAngle, stopAngle) {
		ctx.beginPath();

		for (var i = startAngle * Math.PI; i < stopAngle * Math.PI; i += 0.01 ) {
		    xPos = centerX - (r1 * Math.sin(i)) * Math.sin(rotAngle * Math.PI) + (r2 * Math.cos(i)) * Math.cos(rotAngle * Math.PI);
		    yPos = centerY + (r2 * Math.cos(i)) * Math.sin(rotAngle * Math.PI) + (r1 * Math.sin(i)) * Math.cos(rotAngle * Math.PI);

		    if (i == 0) {
		        ctx.moveTo(xPos, yPos);
		    } else {
		        ctx.lineTo(xPos, yPos);
		    }
		}
		ctx.lineWidth = 2;
		ctx.strokeStyle = "#232323";
		ctx.stroke();
		ctx.closePath();
	}

	function drawPath_5(centerX, centerY) {
		d = 150;
		ctx.beginPath();
		for (var i = - (d / 2); i < (d / 2); i += 0.15 ) {
		    xPos = centerX + i;
		    yPos = centerY;
		    if (i == 0) {
		        ctx.moveTo(xPos, yPos);
		    } else {
		        ctx.lineTo(xPos, yPos);
		    }
		}
		ctx.lineWidth = 2;
		ctx.strokeStyle = "#232323";
		ctx.stroke();
		ctx.closePath();
	}

	function stopResumeButtonOnPressed() {
		var button = document.getElementById("stopResumeButton");
		if (button.innerHTML == "STOP") {
			if (magnetDirection == true) {
				NSNS = false;
				button.innerHTML = "RESUME";
				console.log("stop");
			}
		} else {
			if (magnetDirection == true) {
				NSNS = true;
				animateArrows();
				button.innerHTML = "STOP";
				console.log("resume");
			}
		}
	}

	function reverseButtonOnClick() {
		if (magnetDirection == false) {
			magnetDirection = true;
			ctx.clearRect(0, 0, canvas.width, canvas.height);
                        NSNS = true;
			pathForward();
                        animateArrows();			
			console.log("false dir");
		} else if (magnetDirection == true) {
			magnetDirection = false;
			NSNS = false;
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			pathReverse();
			animateArrowsReverse();
			console.log("here !");
		}
	}

	function pathForward() {

		cleanVariables();
		pathArrow_1 = prepareArrowPath_Eliptic(395, 300, 49, 90, 1.0, 0.13, 0.87);
		pathArrow_1B = prepareArrowPath_Eliptic(595, 300, 49, 90, 1.0, 0.13, 0.87).reverse();
		pathArrow_1C = prepareArrowPath_Eliptic(200, 300, 49, 90, 1.0, 0.13, 0.87).reverse();
		pathArrow_2 = prepareArrowPath_2(395,320);
		pathArrow_2_B = prepareArrowPath_2(200,320).reverse();
		pathArrow_2_C = prepareArrowPath_2(595,320).reverse();
		pathArrow_3 = prepareArrowPath_3(395,280).reverse();
		pathArrow_3_B = prepareArrowPath_3(200,280);
		pathArrow_3_C = prepareArrowPath_3(595,280);
        	pathArrow_4 = prepareArrowPath_Eliptic(397, 322, 79, 90, 1.0, 1.02, 2.0).reverse();
	        pathArrow_4_B = prepareArrowPath_Eliptic(200, 330, 79, 90, 1.0, 1.02, 2.0);
		pathArrow_4_C = prepareArrowPath_Eliptic(590, 330, 79, 90, 1.0, 1.02, 2.0);
		pathArrow_5 = prepareArrowPath_5(395, 295);
		pathArrow_5_B = prepareArrowPath_5(20, 295);
		pathArrow_5_C = prepareArrowPath_5(700, 295);
		pathArrow_6 = prepareArrowPath_6(395, 320);	
		pathArrow_6_B = prepareArrowPath_6(20, 320);	
		pathArrow_6_C = prepareArrowPath_6(700, 320);	
		pathArrow_7 = prepareArrowPath_Eliptic(61, 226, 41, 70, 0.3, 0.09, 0.79).reverse();
        	pathArrow_8 = prepareArrowPath_Eliptic(727, 386, 41, 80, 1.2, 0.25, 0.80);
		pathArrow_9 = prepareArrowPath_Eliptic(725, 235, 41, 70, 1.8, 0.09, 0.79).reverse();
		pathArrow_10 = prepareArrowPath_Eliptic(50, 397, 37, 83, 0.68, 0.42, 0.97);
	}

	function pathReverse() {
		cleanVariables();
		pathArrow_1B = prepareArrowPath_Eliptic(595, 300, 49, 90, 1.0, 0.13, 0.87);
		pathArrow_1C = prepareArrowPath_Eliptic(200, 300, 49, 90, 1.0, 0.13, 0.87).reverse();
		pathArrow_2_B = prepareArrowPath_2(200,320).reverse();
		pathArrow_2_C = prepareArrowPath_2(595,320);
		pathArrow_3_B = prepareArrowPath_3(200,280);
		pathArrow_3_C = prepareArrowPath_3(595,280).reverse();
	        pathArrow_4_B = prepareArrowPath_Eliptic(200, 330, 79, 90, 1.0, 1.02, 2.0);
		pathArrow_4_C = prepareArrowPath_Eliptic(590, 330, 79, 90, 1.0, 1.02, 2.0).reverse();
		pathArrow_5_B = prepareArrowPath_5(20, 295);
		pathArrow_5_C = prepareArrowPath_5(700, 295).reverse();
		pathArrow_6_B = prepareArrowPath_6(20, 320);	
		pathArrow_6_C = prepareArrowPath_6(700, 320).reverse();	
		pathArrow_7 = prepareArrowPath_Eliptic(61, 226, 41, 70, 0.3, 0.09, 0.79).reverse();
        	pathArrow_8 = prepareArrowPath_Eliptic(727, 386, 41, 80, 1.2, 0.25, 0.80).reverse();
		pathArrow_9 = prepareArrowPath_Eliptic(725, 235, 41, 70, 1.8, 0.09, 0.79);
		pathArrow_10 = prepareArrowPath_Eliptic(50, 397, 37, 83, 0.68, 0.42, 0.97);
		pathArrow_11 = prepareArrowPath_Eliptic(470, 410, 50, 95, 0.52, 0.42, 0.97).reverse();
		pathArrow_12 = prepareArrowPath_Eliptic(323, 235, 41, 70, 1.65, 0.09, 0.79).reverse();
		pathArrow_13 = prepareArrowPath_Eliptic(327, 389, 41, 75, 1.38, 0.15, 0.80);
		pathArrow_14 = prepareArrowPath_Eliptic(460, 226, 41, 70, 0.4, 0.09, 0.79);
	}


	function cleanVariables() {
	        currentFrame;
        	arrowFrame_A  = 0;
        	arrowFrame_AB = 0;
        	arrowFrame_AC = 0;
        	arrowFrame_AD = 0;
        	arrowFrame_B = 0;
        	arrowFrame_BB = 0;
        	arrowFrame_BC = 0;
        	arrowFrame_C = 0;
        	arrowFrame_CB = 0;
        	arrowFrame_CC = 0;
        	arrowFrame_D = 0;
        	arrowFrame_DB = 0;
        	arrowFrame_DC = 0;
        	arrowFrame_E = 0;
        	arrowFrame_EB = 0;
        	arrowFrame_EC = 0;
        	arrowFrame_F = 0;
        	arrowFrame_FB = 0;
        	arrowFrame_FC = 0;
        	arrowFrame_G = 0;
        	arrowFrame_H = 0;
        	arrowFrame_I = 0;
        	arrowFrame_J = 0;
	}


	pathForward();
	animateArrows();
