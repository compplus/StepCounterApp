import __screens from '~/project/__subscreens.macro'

import { K, L, suppose } from 'camarche/core'
import { calmm } from 'camarche/calmm'
import { belief, mark } from 'camarche/faith'
import { nav_path_, path_screen_ } from '~/project/aux'

import { location_state } from '~/project/state'


var nav_screen_ = _nav => path_screen_ (__screens) (nav_path_ (_nav))

var screen_state = belief ([ nav_screen_, L .valueOr (K (null)) ]) (location_state)

export default calmm (_ => 
	suppose (
	( Screen = mark (screen_state)
	) =>
	<Screen /> ) )
