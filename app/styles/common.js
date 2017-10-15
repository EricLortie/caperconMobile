import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

export const primaryFontColour = "#333";
export const primaryBGColour = "#ffffff";
export const primaryHighlightColour = "#1A9ADA";
export const primaryAccentColour = "#15bbef";
export const secondaryFontColour = "#eeeeee";
export const secondaryBGColour = "#1A9ADA";
export const secondaryHighlightColour = "#FF9112";

export const styles = StyleSheet.create({
  defaultContainer: {
    backgroundColor: primaryBGColour
  },
  defaultWithPadding: {
    padding: 5,
    backgroundColor: primaryBGColour
  },
  altContainer: {
    backgroundColor: secondaryBGColour
  },
  altWithPadding: {
    padding: 5,
    backgroundColor: secondaryBGColour
  },
  altWithPaddingAndBorder: {
    padding: 5,
    backgroundColor: secondaryBGColour,
    borderColor: secondaryHighlightColour,
    borderWidth: 5
  },
  spellContainer: {
    padding: 20,
  },
  defaultText: {
    padding: 5,
    color: primaryFontColour,
  },
  descriptionText: {
    fontSize: 18,
    padding: 10,
    color: primaryFontColour
  },
  subtitleText: {
    color: primaryFontColour,
  },
  metaText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: primaryFontColour,
    padding: 4
  },
  metaTextWithPadding: {
    fontSize: 15,
    fontWeight: 'bold',
    color: primaryFontColour,
    paddingTop: 4,
    paddingBottom: 4
  },
  listContainer: {
    backgroundColor: secondaryBGColour
  },
  smallListText: {
    left: 10,
    color: secondaryFontColour,
    fontSize: 14,
    fontWeight: 'bold'
  },
  listText: {
    left: 10,
    color: secondaryFontColour,
    fontSize: 20,
    fontWeight: 'bold'
  },
  headerContainer: {
    padding: 20,
    borderBottomColor: primaryFontColour,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  headerContainerWPadding: {
    padding: 20,
    paddingTop: 40,
    borderBottomColor: primaryFontColour,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  headerText: {
    fontSize: 25,
    textAlign: 'center',
    color: primaryFontColour
  },
  altHeaderText: {
    fontSize: 25,
    padding: 8,
    textAlign: 'center',
    fontWeight: 'bold',
    color: secondaryFontColour
  },
  subHeaderText: {
    fontSize: 15,
    padding: 4,
    textAlign: 'center',
    fontWeight: 'bold',
    color: primaryFontColour
  },
  altText: {
    padding: 3,
    color: secondaryFontColour,
    fontWeight: 'bold'
  },
  warningText: {
    top:20,
    color: secondaryFontColour,
    padding: 20
  },
  infoPanel: {
    padding: 25,
    borderBottomColor: primaryFontColour,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopColor: primaryFontColour,
    borderTopWidth: StyleSheet.hairlineWidth
  },
  infoIconContainer: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'

  },
  infoIcon: {
    padding: 20,
    borderColor: primaryFontColour,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 4
  },
  infoTitle: {
    color: primaryAccentColour,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 8
  },
  infoDesc: {
  },
  headerContentPanel: {
    backgroundColor: secondaryBGColour,
    padding: 12
  },
  card: {
    backgroundColor: primaryBGColour,
    color: primaryFontColour,
    margin: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 5,
    shadowOpacity: 0.5
  },
  cardText: {
    color: primaryFontColour,
    padding: 5,
    margin: 5
  },
  headerImage: {
    alignSelf: 'stretch',
  },
  skillText: {
    color: primaryFontColour,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15

  },
  costHeader: {
    color: primaryFontColour,
    fontWeight: 'bold',
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  cost: {
    color: primaryFontColour,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  costRow: {
    marginTop: 8,
    marginBottom: 15
  },
  metaPanel: {
    backgroundColor: secondaryBGColour,
    margin: 20,
    borderColor: secondaryFontColour,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 6
  },
  contentPanel: {
    backgroundColor: primaryBGColour,
    margin: 10
  },
  tabBar: {
    fontSize: 10,
    marginTop:8,
    paddingBottom: 8,
    color: primaryFontColour,
    textAlign: 'center'
  },
  priceBox: {
    padding: 8,
    borderRadius: 6,
    backgroundColor: primaryBGColour,
    flex: 1,
    flexDirection: 'row'
  },
  priceAmount: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 6
  },
  priceLabel: {
    fontSize: 28,
    margin: 6
  },
  fcCard: {
    backgroundColor: secondaryBGColour,
    margin: 8,
    padding: 8
  },
  fcTitle: {
    color: 'red'
  },
  fcText: {
    marginBottom: 10,
    color: secondaryFontColour
  },
  fcButton: {
    backgroundColor: secondaryHighlightColour,
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0
  },
  exhibitorButton: {
    backgroundColor: secondaryFontColour,
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0
  },
  fcTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  featuredExhibitor: {
    paddingTop: 8,
    paddingBottom: 8,
    borderBottomColor: primaryAccentColour,
    borderBottomWidth: 2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  subtitleImage: {
    height: 40,
    width: 90
  },
  subtitleText: {
    fontSize: 16,
    paddingLeft: 10,
    fontWeight: 'bold',
    color: secondaryFontColour,
    width: 180
  },
  fc_view: {
    marginTop: 8,
    marginBottom: 8,
    padding:8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fc_label: {
    fontSize: 12,
    marginTop: 2,
    marginBottom: 2,
    color: 'black',
    textAlign: 'center',
  },
  eventNameText: {
    fontSize: 20,
    color: secondaryFontColour,
    alignSelf: 'stretch',
    textAlign: 'center',
    fontWeight: 'bold',
    flex: 1
  },
  eventVenueText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: secondaryFontColour,
    alignSelf: 'stretch',
    textAlign: 'left',
    flex: 1
  },
  eventTimeText: {
    fontSize: 16,
    color: secondaryFontColour,
    alignSelf: 'stretch',
    textAlign: 'left',
    flex: 1
  }

});

export var htmlstyles = StyleSheet.create({
  body: {
    color: primaryFontColour
  },
  h1: {
    fontSize: 24,
    color: primaryFontColour,
    fontWeight: 'bold'
  },
  h2: {
    color: primaryFontColour,
    fontSize: 20,
    fontWeight: 'bold'
  },
  h4: {
    color: primaryFontColour,
    fontWeight: 'bold'
  },
  a: {
    fontWeight: 'bold',
    fontSize: 16,
    color: primaryAccentColour
  },
  p:{
    fontSize: 16,
    color: primaryFontColour,
    padding: 0,
    margin: 0
  },
  li: {
    fontSize: 16,
    color: primaryFontColour
  },
  span: {
    fontSize: 16,
    color: primaryFontColour
  },
  b:{
    fontWeight:'bold',
    fontSize: 18,
    color: primaryFontColour
  },
  strong:{
    fontWeight:'bold',
    fontSize: 18,
    color: primaryFontColour
  }
});
