/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createShop = /* GraphQL */ `
  mutation CreateShop(
    $input: CreateShopInput!
    $condition: ModelShopConditionInput
  ) {
    createShop(input: $input, condition: $condition) {
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
export const updateShop = /* GraphQL */ `
  mutation UpdateShop(
    $input: UpdateShopInput!
    $condition: ModelShopConditionInput
  ) {
    updateShop(input: $input, condition: $condition) {
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
export const deleteShop = /* GraphQL */ `
  mutation DeleteShop(
    $input: DeleteShopInput!
    $condition: ModelShopConditionInput
  ) {
    deleteShop(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
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
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
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
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
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
