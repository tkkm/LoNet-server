/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateShop = /* GraphQL */ `
  subscription OnCreateShop {
    onCreateShop {
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
export const onUpdateShop = /* GraphQL */ `
  subscription OnUpdateShop {
    onUpdateShop {
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
export const onDeleteShop = /* GraphQL */ `
  subscription OnDeleteShop {
    onDeleteShop {
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
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem {
    onCreateItem {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem {
    onUpdateItem {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem {
    onDeleteItem {
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
