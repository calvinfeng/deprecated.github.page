"use strict";

// Author(s): Calvin J. Feng

(function() {
    /* global katex */
    console.log("Hello World");
    const ratingAggregation = `r_{u,i} = \\bar{r}_{u} + \\gamma
        \\sum_{u' \\in K} sim(u, u') r_{u', i}`;
    katex.render(ratingAggregation, document.getElementById('rating-aggregation'));

    const gammaFactor = "\\gamma = (\\sum_{u' \\in K} \\left | sim(u, u') \\right |)^{-1}";
    katex.render(gammaFactor, document.getElementById('gamma-factor'));

    const simCoeff = `sim(u, v) = C^{-1}\\sum_{i\\in I_{u} \\cap I_{v}}(r_{u, i} - \\bar{r}_u)
        (r_{v,i} - \\bar{r}_v)`;
    katex.render(simCoeff, document.getElementById('sim-coeff'));

    const simNorm = `C = \\sqrt{\\sum_{i\\in I_{u}\\cap I_{v}}(r_{u,i} - \\bar{r}_u)^{2};
        \\sum_{i\\in I_{u}\\cap I_{v}}(r_{v,i} - \\bar{r}_v)^{2}}`;
    katex.render(simNorm, document.getElementById('sim-norm'));

    const ratingMatrix = `R =\\begin{bmatrix}
        r_{user_{1},movie_{1}} & r_{user_{1}, movie_{2}} & r_{user_{1}, movie_{3}}
        & ... & r_{user_{1}, movie_{m}}\\\\
        r_{user_{2},movie_{1}} & r_{user_{2}, movie_{2}} & r_{user_{2}, movie_{3}}
        & ... & r_{user_{2}, movie_{m}}\\\\
        r_{user_{3},movie_{1}} & r_{user_{3}, movie_{2}} & r_{user_{3}, movie_{3}}
        & ... & r_{user_{3}, movie_{m}}\\\\
        ... & ... & ... & ... & ... \\\\
        r_{user_{N}, movie_{1}} & r_{user_{N}, movie_{2}} & r_{user_{N}, movie_{3}}
        & ... & r_{user_{N}, movie_{m}}
        \\end{bmatrix}`;
    katex.render(ratingMatrix, document.getElementById('rating-matrix'));

    const sparseMatrix = `R_{sparse} = \\begin{bmatrix}
        r_{1,1} & r_{1,2} & ??? & r_{1,4} & ??? \\\\
        r_{2,1} & ??? & r_{2,3} & r_{2,4} & r_{2,5} \\\\
        r_{3,1} & r_{3,2} & r_{3,3} & r_{3,4} & r_{3,5} \\\\
        r_{4,1} & r_{4,2} & r_{4,3} & ??? & r_{4,5} \\\\
        r_{5,1} & ??? & r_{5,3} & r_{5,4} & r_{5,5}
        \\end{bmatrix}`;
    katex.render(sparseMatrix, document.getElementById("sparse-matrix"));

    const singleItemPrediction = `R_{sparse}[i][j]\\mapsto prediction`;
    katex.render(singleItemPrediction, document.getElementById("single-item-prediction"));

    const matrixDecomposition = `R =\\begin{bmatrix}
        \\theta_{user_{1},1} & \\theta_{user_{1},2} & \\theta_{user_{1},3} &
        \\theta_{user_{1},4} & \\theta_{user_{1},5}\\\\
        \\theta_{user_{2},1} & \\theta_{user_{2},2} & \\theta_{user_{2},3} &
        \\theta_{user_{2},4} & \\theta_{user_{2},5}\\\\
        \\theta_{user_{3},1} & \\theta_{user_{3},2} & \\theta_{user_{3},3} &
        \\theta_{user_{3},4} & \\theta_{user_{3},5}\\\\
        \\theta_{user_{4},1} & \\theta_{user_{4},2} & \\theta_{user_{4},3} &
        \\theta_{user_{4},4} & \\theta_{user_{4},5}\\\\
        \\theta_{user_{5},1} & \\theta_{user_{5},2} & \\theta_{user_{5},3} &
        \\theta_{user_{5},4} & \\theta_{user_{5},5}\\end{bmatrix}\\times
        \\begin{bmatrix}
        \\lambda_{1} & 0 & 0 & 0 & 0 \\\\
        0 & \\lambda_{2} & 0 & 0 & 0 \\\\
        0 & 0 & \\lambda_{3} & 0 & 0 \\\\
        0 & 0 & 0 & \\lambda_{4} & 0 \\\\
        0 & 0 & 0 & 0 & \\lambda_{5}
        \\end{bmatrix}\\times
        \\begin{bmatrix}
        f_{1, movie_{1}} & f_{1, movie_{2}} & f_{1, movie_{3}} & f_{1, movie_{4}} & f_{1, movie_{5}}\\\\
        f_{2, movie_{1}} & f_{2, movie_{2}} & f_{2, movie_{3}} & f_{2, movie_{4}} & f_{2, movie_{5}}\\\\
        f_{3, movie_{1}} & f_{3, movie_{2}} & f_{3, movie_{3}} & f_{3, movie_{4}} & f_{3, movie_{5}}\\\\
        f_{4, movie_{1}} & f_{4, movie_{2}} & f_{4, movie_{3}} & f_{4, movie_{4}} & f_{4, movie_{5}}\\\\
        f_{5, movie_{1}} & f_{5, movie_{2}} & f_{5, movie_{3}} & f_{5, movie_{4}} & f_{5, movie_{5}}
        \\end{bmatrix}`;
    katex.render(matrixDecomposition, document.getElementById('matrix-decomposition'));

    const dimension = `N \\times m = (N \\times p)(p \\times f)(f \\times m)`;
    katex.render(dimension, document.getElementById('dimension'));

    const linearCombination = `R_{i,j} =
        \\theta_{i, 1}\\lambda_{1} f_{1, j} + \\theta_{i, 2}\\lambda_{2} f_{2, j} +
        \\theta_{i, 3}\\lambda_{3} f_{3, j} + ... + \\theta_{i, n}\\lambda_{n} f_{n,j}`;
    katex.render(linearCombination, document.getElementById('linear-combination'));

    const costFunction = `J(f^{(1)}, f^{(2)}, f^{(3)}, ..., f^{(m)},
        \\theta^{(1)}, \\theta^{(2)}, \\theta^{(3)}, ..., \\theta^{(N)}) =
        \\frac{1}{2}\\sum_{i, j \\in R} (\\theta^{(j)}f^{(i)} - r^{(i,j)})^{2} +
        \\frac{\\lambda}{2}\\sum_{i}^{m}\\sum_{k}^{n} (f_{k}^{(i)})^{2} +
        \\frac{\\lambda}{2}\\sum_{j}^{N}\\sum_{k}^{n} (\\theta_{k}^{(j)})^{2}`;
    katex.render(costFunction, document.getElementById('cost-function'));

    const objective = `Objective:\\,minimize\\,J\\,with\\,respect\\,to\\:\\Theta,\\:F`;
    katex.render(objective, document.getElementById('objective'));

    const bigTheta = `\\Theta = {\\theta^{(1)}, \\theta^{(2)}, \\theta^{(3)}, ...,
        \\theta^{(N)}} \\:F = {f^{(1)}, f^{(2)}, f^{(3)}, ..., f^{(m)}}`;
    katex.render(bigTheta, document.getElementById('big-theta'));


    const djDf = `f_{k}^{(i)} := f_{k}^{(i)} - \\alpha \\frac{\\partial J}{\\partial f_{k}^{(i)}}`;
    katex.render(djDf, document.getElementById('dj-df'));

    const djDtheta = `\\theta_{k}^{(i)} := \\theta_{k}^{(i)} -
        \\alpha \\frac{\\partial J}{\\partial \\theta_{k}^{(i)}}`;
    katex.render(djDtheta, document.getElementById('dj-dtheta'));

    const prediction = `R_{prediction} = \\Theta\\Lambda F^{T} =\\begin{bmatrix}
        \\lambda_{1}\\theta_{user_{1},1} & \\lambda_{2}\\theta_{user_{1},2} &
        \\lambda_{3}\\theta_{user_{1},3} & \\lambda_{4}\\theta_{user_{1},4} &
        \\lambda_{5}\\theta_{user_{1},5}\\\\
        \\lambda_{1}\\theta_{user_{2},1} & \\lambda_{2}\\theta_{user_{2},2} &
        \\lambda_{3}\\theta_{user_{2},3} & \\lambda_{4}\\theta_{user_{2},4} &
        \\lambda_{5}\\theta_{user_{2},5}\\\\
        \\lambda_{1}\\theta_{user_{3},1} & \\lambda_{2}\\theta_{user_{3},2} &
        \\lambda_{3}\\theta_{user_{3},3} & \\lambda_{3}\\theta_{user_{3},4} &
        \\lambda_{5}\\theta_{user_{3},5}\\\\
        \\lambda_{1}\\theta_{user_{4},1} & \\lambda_{2}\\theta_{user_{4},2} &
        \\lambda_{3}\\theta_{user_{4},3} & \\lambda_{4}\\theta_{user_{4},4} &
        \\lambda_{5}\\theta_{user_{4},5}\\\\
        \\lambda_{1}\\theta_{user_{5},1} & \\lambda_{2}\\theta_{user_{5},2} &
        \\lambda_{3}\\theta_{user_{5},3} & \\lambda_{4}\\theta_{user_{5},4} &
        \\lambda_{5}\\theta_{user_{5},5}
        \\end{bmatrix}\\times
        \\begin{bmatrix}
        f_{1, movie_{1}} & f_{1, movie_{2}} & f_{1, movie_{3}} & f_{1, movie_{4}} & f_{1, movie_{5}}\\\\
        f_{2, movie_{1}} & f_{2, movie_{2}} & f_{2, movie_{3}} & f_{2, movie_{4}} & f_{2, movie_{5}}\\\\
        f_{3, movie_{1}} & f_{3, movie_{2}} & f_{3, movie_{3}} & f_{3, movie_{4}} & f_{3, movie_{5}}\\\\
        f_{4, movie_{1}} & f_{4, movie_{2}} & f_{4, movie_{3}} & f_{4, movie_{4}} & f_{4, movie_{5}}\\\\
        f_{5, movie_{1}} & f_{5, movie_{2}} & f_{5, movie_{3}} & f_{5, movie_{4}} & f_{5, movie_{5}}
        \\end{bmatrix}`;
    katex.render(prediction, document.getElementById('prediction'));


}());
