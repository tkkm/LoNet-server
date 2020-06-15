/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getShop = /* GraphQL */ `
  query GetShop($id: ID!) {
    getShop(id: $id) {
      id
      name
      address
      phone
      payment
      openHours {
        weekdayNumber
        open
        close
      }
      openHourRemarks
      sector
      mainImage {
        bucket
        key
        region
        fileName
      }
      subImages {
        bucket
        key
        region
        fileName
      }
      description
      itemas {
        items {
          id
          name
          price
          description
          categoryID
          status
          shopID
          salePrice
          saleDescription
        }
        nextToken
      }
    }
  }
`;
export const listShops = /* GraphQL */ `
  query ListShops(
    $filter: ModelShopFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShops(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        address
        phone
        payment
        openHours {
          weekdayNumber
          open
          close
        }
        openHourRemarks
        sector
        mainImage {
          bucket
          key
          region
          fileName
        }
        subImages {
          bucket
          key
          region
          fileName
        }
        description
        itemas {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      partent {
        id
        name
        partent {
          id
          name
          isMinumun
        }
        isMinumun
        itemas {
          nextToken
        }
      }
      isMinumun
      itemas {
        items {
          id
          name
          price
          description
          categoryID
          status
          shopID
          salePrice
          saleDescription
        }
        nextToken
      }
    }
  }
`;
export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        partent {
          id
          name
          isMinumun
        }
        isMinumun
        itemas {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
      id
      name
      mainImage {
        bucket
        key
        region
        fileName
      }
      subImages {
        bucket
        key
        region
        fileName
      }
      price
      description
      categoryID
      status
      shopID
      salePrice
      saleDescription
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        mainImage {
          bucket
          key
          region
          fileName
        }
        subImages {
          bucket
          key
          region
          fileName
        }
        price
        description
        categoryID
        status
        shopID
        salePrice
        saleDescription
      }
      nextToken
    }
  }
`;
