/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateShopInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  address: string,
};

export type ModelShopConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  address?: ModelStringInput | null,
  and?: Array< ModelShopConditionInput | null > | null,
  or?: Array< ModelShopConditionInput | null > | null,
  not?: ModelShopConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export enum ItemStatus {
  Available = "Available",
  RunningOut = "RunningOut",
  OutOfstock = "OutOfstock",
  BackOrder = "BackOrder",
}


export type UpdateShopInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  address?: string | null,
};

export type DeleteShopInput = {
  id?: string | null,
};

export type CreateCategoryInput = {
  id?: string | null,
  name: string,
  is_minumun?: boolean | null,
  categoryPartentId?: string | null,
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null,
  is_minumun?: ModelBooleanInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateCategoryInput = {
  id: string,
  name?: string | null,
  is_minumun?: boolean | null,
  categoryPartentId?: string | null,
};

export type DeleteCategoryInput = {
  id?: string | null,
};

export type CreateItemInput = {
  id?: string | null,
  shopID: string,
  categoryID: string,
  name: string,
  price?: number | null,
  status?: ItemStatus | null,
};

export type ModelItemConditionInput = {
  shopID?: ModelIDInput | null,
  categoryID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  price?: ModelIntInput | null,
  status?: ModelItemStatusInput | null,
  and?: Array< ModelItemConditionInput | null > | null,
  or?: Array< ModelItemConditionInput | null > | null,
  not?: ModelItemConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelItemStatusInput = {
  eq?: ItemStatus | null,
  ne?: ItemStatus | null,
};

export type UpdateItemInput = {
  id: string,
  shopID?: string | null,
  categoryID?: string | null,
  name?: string | null,
  price?: number | null,
  status?: ItemStatus | null,
};

export type DeleteItemInput = {
  id?: string | null,
};

export type ModelShopFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  address?: ModelStringInput | null,
  and?: Array< ModelShopFilterInput | null > | null,
  or?: Array< ModelShopFilterInput | null > | null,
  not?: ModelShopFilterInput | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  is_minumun?: ModelBooleanInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelItemFilterInput = {
  id?: ModelIDInput | null,
  shopID?: ModelIDInput | null,
  categoryID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  price?: ModelIntInput | null,
  status?: ModelItemStatusInput | null,
  and?: Array< ModelItemFilterInput | null > | null,
  or?: Array< ModelItemFilterInput | null > | null,
  not?: ModelItemFilterInput | null,
};

export type CreateShopMutationVariables = {
  input: CreateShopInput,
  condition?: ModelShopConditionInput | null,
};

export type CreateShopMutation = {
  createShop:  {
    __typename: "Shop",
    id: string,
    name: string,
    description: string | null,
    address: string,
    itemas:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        shopID: string,
        categoryID: string,
        name: string,
        price: number | null,
        status: ItemStatus | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateShopMutationVariables = {
  input: UpdateShopInput,
  condition?: ModelShopConditionInput | null,
};

export type UpdateShopMutation = {
  updateShop:  {
    __typename: "Shop",
    id: string,
    name: string,
    description: string | null,
    address: string,
    itemas:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        shopID: string,
        categoryID: string,
        name: string,
        price: number | null,
        status: ItemStatus | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteShopMutationVariables = {
  input: DeleteShopInput,
  condition?: ModelShopConditionInput | null,
};

export type DeleteShopMutation = {
  deleteShop:  {
    __typename: "Shop",
    id: string,
    name: string,
    description: string | null,
    address: string,
    itemas:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        shopID: string,
        categoryID: string,
        name: string,
        price: number | null,
        status: ItemStatus | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    partent:  {
      __typename: "Category",
      id: string,
      name: string,
      partent:  {
        __typename: "Category",
        id: string,
        name: string,
        is_minumun: boolean | null,
      } | null,
      is_minumun: boolean | null,
      itemas:  {
        __typename: "ModelItemConnection",
        nextToken: string | null,
      } | null,
    } | null,
    is_minumun: boolean | null,
    itemas:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        shopID: string,
        categoryID: string,
        name: string,
        price: number | null,
        status: ItemStatus | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    partent:  {
      __typename: "Category",
      id: string,
      name: string,
      partent:  {
        __typename: "Category",
        id: string,
        name: string,
        is_minumun: boolean | null,
      } | null,
      is_minumun: boolean | null,
      itemas:  {
        __typename: "ModelItemConnection",
        nextToken: string | null,
      } | null,
    } | null,
    is_minumun: boolean | null,
    itemas:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        shopID: string,
        categoryID: string,
        name: string,
        price: number | null,
        status: ItemStatus | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    partent:  {
      __typename: "Category",
      id: string,
      name: string,
      partent:  {
        __typename: "Category",
        id: string,
        name: string,
        is_minumun: boolean | null,
      } | null,
      is_minumun: boolean | null,
      itemas:  {
        __typename: "ModelItemConnection",
        nextToken: string | null,
      } | null,
    } | null,
    is_minumun: boolean | null,
    itemas:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        shopID: string,
        categoryID: string,
        name: string,
        price: number | null,
        status: ItemStatus | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateItemMutationVariables = {
  input: CreateItemInput,
  condition?: ModelItemConditionInput | null,
};

export type CreateItemMutation = {
  createItem:  {
    __typename: "Item",
    id: string,
    shopID: string,
    categoryID: string,
    name: string,
    price: number | null,
    status: ItemStatus | null,
  } | null,
};

export type UpdateItemMutationVariables = {
  input: UpdateItemInput,
  condition?: ModelItemConditionInput | null,
};

export type UpdateItemMutation = {
  updateItem:  {
    __typename: "Item",
    id: string,
    shopID: string,
    categoryID: string,
    name: string,
    price: number | null,
    status: ItemStatus | null,
  } | null,
};

export type DeleteItemMutationVariables = {
  input: DeleteItemInput,
  condition?: ModelItemConditionInput | null,
};

export type DeleteItemMutation = {
  deleteItem:  {
    __typename: "Item",
    id: string,
    shopID: string,
    categoryID: string,
    name: string,
    price: number | null,
    status: ItemStatus | null,
  } | null,
};

export type GetShopQueryVariables = {
  id: string,
};

export type GetShopQuery = {
  getShop:  {
    __typename: "Shop",
    id: string,
    name: string,
    description: string | null,
    address: string,
    itemas:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        shopID: string,
        categoryID: string,
        name: string,
        price: number | null,
        status: ItemStatus | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListShopsQueryVariables = {
  filter?: ModelShopFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListShopsQuery = {
  listShops:  {
    __typename: "ModelShopConnection",
    items:  Array< {
      __typename: "Shop",
      id: string,
      name: string,
      description: string | null,
      address: string,
      itemas:  {
        __typename: "ModelItemConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    partent:  {
      __typename: "Category",
      id: string,
      name: string,
      partent:  {
        __typename: "Category",
        id: string,
        name: string,
        is_minumun: boolean | null,
      } | null,
      is_minumun: boolean | null,
      itemas:  {
        __typename: "ModelItemConnection",
        nextToken: string | null,
      } | null,
    } | null,
    is_minumun: boolean | null,
    itemas:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        shopID: string,
        categoryID: string,
        name: string,
        price: number | null,
        status: ItemStatus | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListCategorysQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategorysQuery = {
  listCategorys:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      partent:  {
        __typename: "Category",
        id: string,
        name: string,
        is_minumun: boolean | null,
      } | null,
      is_minumun: boolean | null,
      itemas:  {
        __typename: "ModelItemConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetItemQueryVariables = {
  id: string,
};

export type GetItemQuery = {
  getItem:  {
    __typename: "Item",
    id: string,
    shopID: string,
    categoryID: string,
    name: string,
    price: number | null,
    status: ItemStatus | null,
  } | null,
};

export type ListItemsQueryVariables = {
  filter?: ModelItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListItemsQuery = {
  listItems:  {
    __typename: "ModelItemConnection",
    items:  Array< {
      __typename: "Item",
      id: string,
      shopID: string,
      categoryID: string,
      name: string,
      price: number | null,
      status: ItemStatus | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateShopSubscription = {
  onCreateShop:  {
    __typename: "Shop",
    id: string,
    name: string,
    description: string | null,
    address: string,
    itemas:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        shopID: string,
        categoryID: string,
        name: string,
        price: number | null,
        status: ItemStatus | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateShopSubscription = {
  onUpdateShop:  {
    __typename: "Shop",
    id: string,
    name: string,
    description: string | null,
    address: string,
    itemas:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        shopID: string,
        categoryID: string,
        name: string,
        price: number | null,
        status: ItemStatus | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteShopSubscription = {
  onDeleteShop:  {
    __typename: "Shop",
    id: string,
    name: string,
    description: string | null,
    address: string,
    itemas:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        shopID: string,
        categoryID: string,
        name: string,
        price: number | null,
        status: ItemStatus | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    partent:  {
      __typename: "Category",
      id: string,
      name: string,
      partent:  {
        __typename: "Category",
        id: string,
        name: string,
        is_minumun: boolean | null,
      } | null,
      is_minumun: boolean | null,
      itemas:  {
        __typename: "ModelItemConnection",
        nextToken: string | null,
      } | null,
    } | null,
    is_minumun: boolean | null,
    itemas:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        shopID: string,
        categoryID: string,
        name: string,
        price: number | null,
        status: ItemStatus | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    partent:  {
      __typename: "Category",
      id: string,
      name: string,
      partent:  {
        __typename: "Category",
        id: string,
        name: string,
        is_minumun: boolean | null,
      } | null,
      is_minumun: boolean | null,
      itemas:  {
        __typename: "ModelItemConnection",
        nextToken: string | null,
      } | null,
    } | null,
    is_minumun: boolean | null,
    itemas:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        shopID: string,
        categoryID: string,
        name: string,
        price: number | null,
        status: ItemStatus | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    partent:  {
      __typename: "Category",
      id: string,
      name: string,
      partent:  {
        __typename: "Category",
        id: string,
        name: string,
        is_minumun: boolean | null,
      } | null,
      is_minumun: boolean | null,
      itemas:  {
        __typename: "ModelItemConnection",
        nextToken: string | null,
      } | null,
    } | null,
    is_minumun: boolean | null,
    itemas:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        shopID: string,
        categoryID: string,
        name: string,
        price: number | null,
        status: ItemStatus | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateItemSubscription = {
  onCreateItem:  {
    __typename: "Item",
    id: string,
    shopID: string,
    categoryID: string,
    name: string,
    price: number | null,
    status: ItemStatus | null,
  } | null,
};

export type OnUpdateItemSubscription = {
  onUpdateItem:  {
    __typename: "Item",
    id: string,
    shopID: string,
    categoryID: string,
    name: string,
    price: number | null,
    status: ItemStatus | null,
  } | null,
};

export type OnDeleteItemSubscription = {
  onDeleteItem:  {
    __typename: "Item",
    id: string,
    shopID: string,
    categoryID: string,
    name: string,
    price: number | null,
    status: ItemStatus | null,
  } | null,
};
