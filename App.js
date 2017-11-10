<TouchableWithoutFeedback
    onPress={()=>this.setState({
        showAreaModel: false,
        showPriceModel: false,
        showOtherModel: !this.state.showOtherModel,
        showOtherModel: false,
    })}
>
  <View style={styles.filterTextBox}>
    <View style={styles.filterTextBox}>
      <Text style={[styles.filterText, this.state.showOtherModel?{color: '#fa0064'}:null]} numberOfLines={1}>
          {this.state.other?this.state.other:'类型'}
      </Text>
      <Icon name="arrow-drop-down" size={18} color={this.state.showOtherModel?"#fa0064":"#999"} />
    </View>
  </View>
</TouchableWithoutFeedback>