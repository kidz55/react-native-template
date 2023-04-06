import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  GestureResponderEvent,
  LayoutChangeEvent,
} from 'react-native';
import TabNavigation from '../TabNavigation/TabNavigation';

interface Props {
  tabs: string[];
  initialTab?: string;
  children: React.ReactNode[];
}

const SwipeableView = ({tabs, initialTab = tabs[0], children}: Props) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [containerWidth, setContainerWidth] = useState(
    Dimensions.get('window').width,
  );

  const handleLayoutChange = (event: LayoutChangeEvent) => {
    setContainerWidth(event.nativeEvent.layout.width);
  };

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
    const index = tabs.indexOf(tab);
    scrollViewRef.current?.scrollTo({x: index * containerWidth});
  };

  const handleScroll = (event: GestureResponderEvent) => {
    //@ts-ignore
    const x = event.nativeEvent.contentOffset.x;
    const index = Math.round(x / containerWidth);
    setActiveTab(tabs[index]);
  };

  const scrollViewRef = React.useRef<ScrollView>(null);

  return (
    <View style={styles.container} onLayout={handleLayoutChange}>
      <TabNavigation
        tabs={tabs}
        activeTab={activeTab}
        onTabPress={handleTabPress}
      />
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        //@ts-ignore
        onMomentumScrollEnd={handleScroll}>
        {children.map((child, i) => (
          <View key={i} style={{width: containerWidth}}>
            {child}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SwipeableView;
