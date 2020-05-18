/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateShop = /* GraphQL */ `
  subscription OnCreateShop {
    onCreateShop {
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
export const onUpdateShop = /* GraphQL */ `
  subscription OnUpdateShop {
    onUpdateShop {
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
export const onDeleteShop = /* GraphQL */ `
  subscription OnDeleteShop {
    onDeleteShop {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem {
    onCreateItem {
      id
      shopID
      categoryID
      name
      price
      status
    }
  }
`;
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem {
    onUpdateItem {
      id
      shopID
      categoryID
      name
      price
      status
    }
  }
`;
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem {
    onDeleteItem {
      id
      shopID
      categoryID
      name
      price
      status
    }
  }
`;
