import { L, I, by } from 'camarche/core'
import { pinpoint } from 'camarche/optics'
import { mark, belief } from 'camarche/faith'

import { width_state, height_state } from './state'

var live_ = pinpoint (
	L .lazy (rec =>
		L .modify (L .values
		) (
		pinpoint (L .choose (val => !! val ._mark ? mark : rec)) ) ) )

// Guideline sizes are based on iphone X
var guidelineBaseWidth = 375
var guidelineBaseHeight = 812
var scale = size => belief (_width => _width / guidelineBaseWidth * size) (width_state)
var vertical_scale = size => belief (_height => _height / guidelineBaseHeight * size) (height_state)
var moderate_scale = (size, factor = 0.5) => belief (_scale => size + ( _scale - size ) * factor) (scale (size))

export { live_, scale, vertical_scale, moderate_scale }
