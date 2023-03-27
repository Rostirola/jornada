import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({

  scrollView: {
    backgroundColor: '#FFF',
    paddingHorizontal:15,
    paddingVertical:15,
    flex:1,
    width:'100%',
    height:'100%'
  },
  container:{
    alignItems: 'baseline',
    justifyContent: 'space-between',
    flex:1,
    width:'100%',
    height:'100%',
    backgroundColor:'#FFF',
    paddingHorizontal:15,
    paddingVertical:15,
  },
  headerArea:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:15,
    marginTop:15
  },
  h1:{
    fontSize:20,
    color:'#333',
    fontWeight:'bold',
    textDecorationLine:'underline',
    textDecorationColor:'#333',
    textDecorationStyle:'solid',
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    textAlignVertical:'center',
    alignSelf:'center'
  },
  h2:{
    fontSize:16,
    color:'#006',
    fontWeight:'bold',
    textDecorationColor:'#333',
    textDecorationStyle:'solid',
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    textAlignVertical:'center',
    alignSelf:'flex-start'
  },
  h3:{
    fontSize:16,
    color:'#006',
    fontWeight:'bold',
    textDecorationColor:'#333',
    textDecorationStyle:'solid',
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    textAlignVertical:'center',
    alignSelf:'flex-start'
  },
  butonlike:{
    borderRadius: 15,
    justifyContent:'flex-start',
    alignItems:'flex-start',
    textAlign:'flex-start',
    backgroundColor:'#00ff2d',
    paddingHorizontal:15,
    width:'100%',
    height:'10%',
    marginTop:10,
    marginBottom:10,
    paddingVertical:10
  },
  butonlike2:{
    borderRadius: 15,
    justifyContent:'flex-start',
    alignItems:'flex-start',
    textAlign:'flex-start',
    backgroundColor:'#ff0000',
    paddingHorizontal:15,
    width:'100%',
    height:'10%',
    marginTop:10,
    marginBottom:10,
    paddingVertical:10
  },
  footerArea:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'center',
    textAlign:'right',
    marginBottom:15,
    marginTop:15
  },
  footerText:{
    color:'#999',
    fontSize:14,
    textDecorationColor:'#999',
    textDecorationStyle:'solid',
  }
});