// Imports
import React from 'react'
import PropTypes  from 'prop-types'
import { Text, View, Image } from 'react-native'

// Assets
import women1Image from '../../../../../assets/images/stock/women/1.jpg'
import women2Image from '../../../../../assets/images/stock/women/2.jpg'
import women3Image from '../../../../../assets/images/stock/women/3.jpg'

// UI Imports
import Button from '../../../../ui/button/Button'
import styles from './styles'

// Component
const CollageWomen = (props) => (
  <View style={styles.container}>
    <View style={styles.imagesContainer}>
      <View style={styles.imagesSplitContainer}>
        <View>
          <Image
            source={women2Image}
            resizeMode={'cover'}
            style={styles.imageSplit}
          />
        </View>

        <View>
          <Image
            source={women3Image}
            resizeMode={'cover'}
            style={styles.imageSplit}
          />
        </View>
      </View>

      <View>
        <Image
          source={women1Image}
          resizeMode={'cover'}
          style={styles.imageLong}
        />
      </View>
    </View>

    <View style={styles.titleContainer}>
      <Text style={styles.title}>Fortnite - iKONIK Skin key</Text>
    </View>

    <View style={styles.content}>
      <Text style={styles.description}>
          Originally, the iKONIK Fortnite skin was released as a promotional cosmetic item available only to those who purchased the Samsung Galaxy S10, S10+, or S10e mobile devices. Luckily, Eneba store offers you the chance to buy Fortnite iKONIK skin Epic Games key separately and redeem the code on the PC platform! It’s a great way to both save and expand your in-game Locker with one of the most recognizable Fortnite skins out there!
      </Text>

      <Button
        iconLeft={'add'}
        title={'Get Subscription'}
        theme={'secondary'}
        onPress={props.getSubscription}
      />
    </View>
  </View>
)

// Component Properties
CollageWomen.propTypes = {
  getSubscription: PropTypes.func.isRequired
}

export default CollageWomen
