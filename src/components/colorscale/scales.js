/**
* Copyright 2012-2021, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

'use strict';

var tinycolor = require('tinycolor2');

var scales = {
    'Greys': [
        [0, 'rgb(0,0,0)'], [1, 'rgb(255,255,255)']
    ],

    'YlGnBu': [
        [0, 'rgb(8,29,88)'], [0.125, 'rgb(37,52,148)'],
        [0.25, 'rgb(34,94,168)'], [0.375, 'rgb(29,145,192)'],
        [0.5, 'rgb(65,182,196)'], [0.625, 'rgb(127,205,187)'],
        [0.75, 'rgb(199,233,180)'], [0.875, 'rgb(237,248,217)'],
        [1, 'rgb(255,255,217)']
    ],

    'Greens': [
        [0, 'rgb(0,68,27)'], [0.125, 'rgb(0,109,44)'],
        [0.25, 'rgb(35,139,69)'], [0.375, 'rgb(65,171,93)'],
        [0.5, 'rgb(116,196,118)'], [0.625, 'rgb(161,217,155)'],
        [0.75, 'rgb(199,233,192)'], [0.875, 'rgb(229,245,224)'],
        [1, 'rgb(247,252,245)']
    ],

    'YlOrRd': [
        [0, 'rgb(128,0,38)'], [0.125, 'rgb(189,0,38)'],
        [0.25, 'rgb(227,26,28)'], [0.375, 'rgb(252,78,42)'],
        [0.5, 'rgb(253,141,60)'], [0.625, 'rgb(254,178,76)'],
        [0.75, 'rgb(254,217,118)'], [0.875, 'rgb(255,237,160)'],
        [1, 'rgb(255,255,204)']
    ],

    'Bluered': [
        [0, 'rgb(0,0,255)'], [1, 'rgb(255,0,0)']
    ],

    // modified RdBu based on
    // http://www.kennethmoreland.com/color-maps/
    'RdBu': [
        [0, 'rgb(5,10,172)'], [0.35, 'rgb(106,137,247)'],
        [0.5, 'rgb(190,190,190)'], [0.6, 'rgb(220,170,132)'],
        [0.7, 'rgb(230,145,90)'], [1, 'rgb(178,10,28)']
    ],

    // Scale for non-negative numeric values
    'Reds': [
        [0, 'rgb(220,220,220)'], [0.2, 'rgb(245,195,157)'],
        [0.4, 'rgb(245,160,105)'], [1, 'rgb(178,10,28)']
    ],

    // Scale for non-positive numeric values
    'Blues': [
        [0, 'rgb(5,10,172)'], [0.35, 'rgb(40,60,190)'],
        [0.5, 'rgb(70,100,245)'], [0.6, 'rgb(90,120,245)'],
        [0.7, 'rgb(106,137,247)'], [1, 'rgb(220,220,220)']
    ],

    'Picnic': [
        [0, 'rgb(0,0,255)'], [0.1, 'rgb(51,153,255)'],
        [0.2, 'rgb(102,204,255)'], [0.3, 'rgb(153,204,255)'],
        [0.4, 'rgb(204,204,255)'], [0.5, 'rgb(255,255,255)'],
        [0.6, 'rgb(255,204,255)'], [0.7, 'rgb(255,153,255)'],
        [0.8, 'rgb(255,102,204)'], [0.9, 'rgb(255,102,102)'],
        [1, 'rgb(255,0,0)']
    ],

    'Rainbow': [
        [0, 'rgb(150,0,90)'], [0.125, 'rgb(0,0,200)'],
        [0.25, 'rgb(0,25,255)'], [0.375, 'rgb(0,152,255)'],
        [0.5, 'rgb(44,255,150)'], [0.625, 'rgb(151,255,0)'],
        [0.75, 'rgb(255,234,0)'], [0.875, 'rgb(255,111,0)'],
        [1, 'rgb(255,0,0)']
    ],

    'Portland': [
        [0, 'rgb(12,51,131)'], [0.25, 'rgb(10,136,186)'],
        [0.5, 'rgb(242,211,56)'], [0.75, 'rgb(242,143,56)'],
        [1, 'rgb(217,30,30)']
    ],

    'Jet': [
        [0, 'rgb(0,0,131)'], [0.125, 'rgb(0,60,170)'],
        [0.375, 'rgb(5,255,255)'], [0.625, 'rgb(255,255,0)'],
        [0.875, 'rgb(250,0,0)'], [1, 'rgb(128,0,0)']
    ],

    'Hot': [
        [0, 'rgb(0,0,0)'], [0.3, 'rgb(230,0,0)'],
        [0.6, 'rgb(255,210,0)'], [1, 'rgb(255,255,255)']
    ],

    'Blackbody': [
        [0, 'rgb(0,0,0)'], [0.2, 'rgb(230,0,0)'],
        [0.4, 'rgb(230,210,0)'], [0.7, 'rgb(255,255,255)'],
        [1, 'rgb(160,200,255)']
    ],

    'Earth': [
        [0, 'rgb(0,0,130)'], [0.1, 'rgb(0,180,180)'],
        [0.2, 'rgb(40,210,40)'], [0.4, 'rgb(230,230,50)'],
        [0.6, 'rgb(120,70,20)'], [1, 'rgb(255,255,255)']
    ],

    'Electric': [
        [0, 'rgb(0,0,0)'], [0.15, 'rgb(30,0,100)'],
        [0.4, 'rgb(120,0,100)'], [0.6, 'rgb(160,90,0)'],
        [0.8, 'rgb(230,200,0)'], [1, 'rgb(255,250,220)']
    ],

    'Viridis': [
        [0, '#440154'], [0.06274509803921569, '#48186a'],
        [0.12549019607843137, '#472d7b'], [0.18823529411764706, '#424086'],
        [0.25098039215686274, '#3b528b'], [0.3137254901960784, '#33638d'],
        [0.3764705882352941, '#2c728e'], [0.4392156862745098, '#26828e'],
        [0.5019607843137255, '#21918c'], [0.5647058823529412, '#1fa088'],
        [0.6274509803921569, '#28ae80'], [0.6901960784313725, '#3fbc73'],
        [0.7529411764705882, '#5ec962'], [0.8156862745098039, '#84d44b'],
        [0.8784313725490196, '#addc30'], [0.9411764705882353, '#d8e219'],
        [1, '#fde725']
    ],

    'Cividis': [
        [0.000000, 'rgb(0,32,76)'], [0.058824, 'rgb(0,42,102)'],
        [0.117647, 'rgb(0,52,110)'], [0.176471, 'rgb(39,63,108)'],
        [0.235294, 'rgb(60,74,107)'], [0.294118, 'rgb(76,85,107)'],
        [0.352941, 'rgb(91,95,109)'], [0.411765, 'rgb(104,106,112)'],
        [0.470588, 'rgb(117,117,117)'], [0.529412, 'rgb(131,129,120)'],
        [0.588235, 'rgb(146,140,120)'], [0.647059, 'rgb(161,152,118)'],
        [0.705882, 'rgb(176,165,114)'], [0.764706, 'rgb(192,177,109)'],
        [0.823529, 'rgb(209,191,102)'], [0.882353, 'rgb(225,204,92)'],
        [0.941176, 'rgb(243,219,79)'], [1.000000, 'rgb(255,233,69)']
    ]
};

var defaultScale = scales.RdBu;

function getScale(scl, dflt) {
    if(!dflt) dflt = defaultScale;
    if(!scl) return dflt;

    function parseScale() {
        try {
            scl = scales[scl] || JSON.parse(scl);
        } catch(e) {
            scl = dflt;
        }
    }

    if(typeof scl === 'string') {
        parseScale();
        // occasionally scl is double-JSON encoded...
        if(typeof scl === 'string') parseScale();
    }

    if(!isValidScaleArray(scl)) return dflt;
    return scl;
}


function isValidScaleArray(scl) {
    var highestVal = 0;

    if(!Array.isArray(scl) || scl.length < 2) return false;

    if(!scl[0] || !scl[scl.length - 1]) return false;

    if(+scl[0][0] !== 0 || +scl[scl.length - 1][0] !== 1) return false;

    for(var i = 0; i < scl.length; i++) {
        var si = scl[i];

        if(si.length !== 2 || +si[0] < highestVal || !tinycolor(si[1]).isValid()) {
            return false;
        }

        highestVal = +si[0];
    }

    return true;
}

function isValidScale(scl) {
    if(scales[scl] !== undefined) return true;
    else return isValidScaleArray(scl);
}

module.exports = {
    scales: scales,
    defaultScale: defaultScale,

    get: getScale,
    isValid: isValidScale
};
