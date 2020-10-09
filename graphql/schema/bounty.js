const bountySchema = `
  type ListItem {
    url: String
    value: String
  }

  type Bounty {
    _id: ID!
    imageUrl: String!
    title: String!
    url: String!
    bountyValue: String!
    status: String
    finalDate: String!
    claimUrl: String!
    clicks: Int
    list: [ListItem]
    tags: [String]
    createdAt: String
    updatedAt: String
  }

  type BountyAnswer {
    bounties: [Bounty!]!
    total: Int!
  }

  input BountyInput {
    imageUrl: String!
    title: String!
    url: String!
    bountyValue: String!
    status: String
    finalDate: String!
    claimUrl: String!
    clicks: Int
    tags: [String]
  }

  input ListItemInput {
    value: String
    url: String
  }

  input OptionsInput {
    imageUrl: String
    title: String
    url: String
    bountyValue: String
    status: String
    finalDate: String
    claimUrl: String
    clicks: Int
    list: [ListItemInput]
    tags: [String]
  }
`

module.exports = bountySchema