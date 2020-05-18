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
      description
      address
      itemas {
        items {
          id
          shopID
          categoryID
          name
          price
          status
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
      description
      address
      itemas {
        items {
          id
          shopID
          categoryID
          name
          price
          status
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
      description
      address
      itemas {
        items {
          id
          shopID
          categoryID
          name
          price
          status
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
          is_minumun
        }
        is_minumun
        itemas {
          nextToken
        }
      }
      is_minumun
      itemas {
        items {
          id
          shopID
          categoryID
          name
          price
          status
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
          is_minumun
        }
        is_minumun
        itemas {
          nextToken
        }
      }
      is_minumun
      itemas {
        items {
          id
          shopID
          categoryID
          name
          price
          status
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
          is_minumun
        }
        is_minumun
        itemas {
          nextToken
        }
      }
      is_minumun
      itemas {
        items {
          id
          shopID
          categoryID
          name
          price
          status
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
      shopID
      categoryID
      name
      price
      status
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
      shopID
      categoryID
      name
      price
      status
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
      shopID
      categoryID
      name
      price
      status
    }
  }
`;
