import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import CardList from './CardList'

describe('Card List renders with a list', () => {
  test('It renders a list of cards with their name and company', () => {
    // Arrange
    const fakeCards = {
        cards: [ {
        id: '1',
        name: 'Ghan Lohar',
        avatar_url: "https://avatars1.githubusercontent.com/u/5575651?v=4",
        company: 'Cognizant'
      },{
        id: '2',
        name: 'Ben Alpert',
        avatar_url: "https://avatars2.githubusercontent.com/u/1448984?v=4",
        company: 'facebook'
      } ]
    }
    // Act
    const { getByText } = render(<CardList cards={fakeCards.cards} />)
    // Assert
    const firstIdNode = getByText(fakeCards.cards[0].company)
    const firstNameNode = getByText(fakeCards.cards[0].name)
    const secondIdNode = getByText(fakeCards.cards[1].company)
    const secondNameNode = getByText(fakeCards.cards[1].name)
    expect(firstIdNode).toBeDefined()
    expect(firstNameNode).toBeDefined()
    expect(secondIdNode).toBeDefined()
    expect(secondNameNode).toBeDefined()
  })
})