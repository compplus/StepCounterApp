import { FlatList } from 'react-native'
import FlatListItem from './FlatListItem'

import { L, I } from 'camarche/core'
import { pinpoints } from 'camarche/optics'

export default ({ children }) =>
	<FlatList data={pinpoints (L .elems) (children)} renderItem={FlatListItem (I)} />
