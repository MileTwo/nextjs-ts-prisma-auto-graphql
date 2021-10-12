import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateTool = {
  __typename?: 'AggregateTool';
  _avg?: Maybe<ToolAvgAggregate>;
  _count?: Maybe<ToolCountAggregate>;
  _max?: Maybe<ToolMaxAggregate>;
  _min?: Maybe<ToolMinAggregate>;
  _sum?: Maybe<ToolSumAggregate>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTool: Tool;
  deleteManyTool: AffectedRowsOutput;
  deleteTool?: Maybe<Tool>;
  updateManyTool: AffectedRowsOutput;
  updateTool?: Maybe<Tool>;
  upsertTool: Tool;
};


export type MutationCreateToolArgs = {
  data: ToolCreateInput;
};


export type MutationDeleteManyToolArgs = {
  where?: Maybe<ToolWhereInput>;
};


export type MutationDeleteToolArgs = {
  where: ToolWhereUniqueInput;
};


export type MutationUpdateManyToolArgs = {
  data: ToolUpdateManyMutationInput;
  where?: Maybe<ToolWhereInput>;
};


export type MutationUpdateToolArgs = {
  data: ToolUpdateInput;
  where: ToolWhereUniqueInput;
};


export type MutationUpsertToolArgs = {
  create: ToolCreateInput;
  update: ToolUpdateInput;
  where: ToolWhereUniqueInput;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedStringNullableFilter>;
  _min?: Maybe<NestedStringNullableFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateTool: AggregateTool;
  findFirstTool?: Maybe<Tool>;
  groupByTool: Array<ToolGroupBy>;
  tool?: Maybe<Tool>;
  tools: Array<Tool>;
};


export type QueryAggregateToolArgs = {
  cursor?: Maybe<ToolWhereUniqueInput>;
  orderBy?: Maybe<Array<ToolOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ToolWhereInput>;
};


export type QueryFindFirstToolArgs = {
  cursor?: Maybe<ToolWhereUniqueInput>;
  distinct?: Maybe<Array<ToolScalarFieldEnum>>;
  orderBy?: Maybe<Array<ToolOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ToolWhereInput>;
};


export type QueryGroupByToolArgs = {
  by: Array<ToolScalarFieldEnum>;
  having?: Maybe<ToolScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<ToolOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ToolWhereInput>;
};


export type QueryToolArgs = {
  where: ToolWhereUniqueInput;
};


export type QueryToolsArgs = {
  cursor?: Maybe<ToolWhereUniqueInput>;
  distinct?: Maybe<Array<ToolScalarFieldEnum>>;
  orderBy?: Maybe<Array<ToolOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ToolWhereInput>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedStringNullableFilter>;
  _min?: Maybe<NestedStringNullableFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type Tool = {
  __typename?: 'Tool';
  description: Scalars['String'];
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  name: Scalars['String'];
};

export type ToolAvgAggregate = {
  __typename?: 'ToolAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type ToolAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type ToolCountAggregate = {
  __typename?: 'ToolCountAggregate';
  _all: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  image: Scalars['Int'];
  link: Scalars['Int'];
  name: Scalars['Int'];
};

export type ToolCountOrderByAggregateInput = {
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  link?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type ToolCreateInput = {
  description: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  name: Scalars['String'];
};

export type ToolGroupBy = {
  __typename?: 'ToolGroupBy';
  _avg?: Maybe<ToolAvgAggregate>;
  _count?: Maybe<ToolCountAggregate>;
  _max?: Maybe<ToolMaxAggregate>;
  _min?: Maybe<ToolMinAggregate>;
  _sum?: Maybe<ToolSumAggregate>;
  description: Scalars['String'];
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  name: Scalars['String'];
};

export type ToolMaxAggregate = {
  __typename?: 'ToolMaxAggregate';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ToolMaxOrderByAggregateInput = {
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  link?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type ToolMinAggregate = {
  __typename?: 'ToolMinAggregate';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ToolMinOrderByAggregateInput = {
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  link?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type ToolOrderByWithAggregationInput = {
  _avg?: Maybe<ToolAvgOrderByAggregateInput>;
  _count?: Maybe<ToolCountOrderByAggregateInput>;
  _max?: Maybe<ToolMaxOrderByAggregateInput>;
  _min?: Maybe<ToolMinOrderByAggregateInput>;
  _sum?: Maybe<ToolSumOrderByAggregateInput>;
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  link?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type ToolOrderByWithRelationInput = {
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  link?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export enum ToolScalarFieldEnum {
  Description = 'description',
  Id = 'id',
  Image = 'image',
  Link = 'link',
  Name = 'name'
}

export type ToolScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<ToolScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<ToolScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<ToolScalarWhereWithAggregatesInput>>;
  description?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  image?: Maybe<StringNullableWithAggregatesFilter>;
  link?: Maybe<StringWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
};

export type ToolSumAggregate = {
  __typename?: 'ToolSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type ToolSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type ToolUpdateInput = {
  description?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  link?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ToolUpdateManyMutationInput = {
  description?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  link?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ToolWhereInput = {
  AND?: Maybe<Array<ToolWhereInput>>;
  NOT?: Maybe<Array<ToolWhereInput>>;
  OR?: Maybe<Array<ToolWhereInput>>;
  description?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  image?: Maybe<StringNullableFilter>;
  link?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
};

export type ToolWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type CreateToolMutationVariables = Exact<{
  name: Scalars['String'];
  description: Scalars['String'];
  link: Scalars['String'];
  image?: Maybe<Scalars['String']>;
}>;


export type CreateToolMutation = { __typename?: 'Mutation', createTool: { __typename?: 'Tool', id: number } };

export type ToolsQueryVariables = Exact<{ [key: string]: never; }>;


export type ToolsQuery = { __typename?: 'Query', tools: Array<{ __typename?: 'Tool', id: number, name: string, description: string, link: string, image?: string | null | undefined }> };

export type ToolQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ToolQuery = { __typename?: 'Query', tool?: { __typename?: 'Tool', id: number, name: string, description: string, link: string, image?: string | null | undefined } | null | undefined };


export const CreateToolDocument = gql`
    mutation CreateTool($name: String!, $description: String!, $link: String!, $image: String) {
  createTool(
    data: {name: $name, description: $description, link: $link, image: $image}
  ) {
    id
  }
}
    `;
export type CreateToolMutationFn = Apollo.MutationFunction<CreateToolMutation, CreateToolMutationVariables>;

/**
 * __useCreateToolMutation__
 *
 * To run a mutation, you first call `useCreateToolMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateToolMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createToolMutation, { data, loading, error }] = useCreateToolMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      link: // value for 'link'
 *      image: // value for 'image'
 *   },
 * });
 */
export function useCreateToolMutation(baseOptions?: Apollo.MutationHookOptions<CreateToolMutation, CreateToolMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateToolMutation, CreateToolMutationVariables>(CreateToolDocument, options);
      }
export type CreateToolMutationHookResult = ReturnType<typeof useCreateToolMutation>;
export type CreateToolMutationResult = Apollo.MutationResult<CreateToolMutation>;
export type CreateToolMutationOptions = Apollo.BaseMutationOptions<CreateToolMutation, CreateToolMutationVariables>;
export const ToolsDocument = gql`
    query Tools {
  tools(orderBy: {name: asc}) {
    id
    name
    description
    link
    image
  }
}
    `;

/**
 * __useToolsQuery__
 *
 * To run a query within a React component, call `useToolsQuery` and pass it any options that fit your needs.
 * When your component renders, `useToolsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useToolsQuery({
 *   variables: {
 *   },
 * });
 */
export function useToolsQuery(baseOptions?: Apollo.QueryHookOptions<ToolsQuery, ToolsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ToolsQuery, ToolsQueryVariables>(ToolsDocument, options);
      }
export function useToolsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ToolsQuery, ToolsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ToolsQuery, ToolsQueryVariables>(ToolsDocument, options);
        }
export type ToolsQueryHookResult = ReturnType<typeof useToolsQuery>;
export type ToolsLazyQueryHookResult = ReturnType<typeof useToolsLazyQuery>;
export type ToolsQueryResult = Apollo.QueryResult<ToolsQuery, ToolsQueryVariables>;
export const ToolDocument = gql`
    query Tool($id: Int!) {
  tool(where: {id: $id}) {
    id
    name
    description
    link
    image
  }
}
    `;

/**
 * __useToolQuery__
 *
 * To run a query within a React component, call `useToolQuery` and pass it any options that fit your needs.
 * When your component renders, `useToolQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useToolQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToolQuery(baseOptions: Apollo.QueryHookOptions<ToolQuery, ToolQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ToolQuery, ToolQueryVariables>(ToolDocument, options);
      }
export function useToolLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ToolQuery, ToolQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ToolQuery, ToolQueryVariables>(ToolDocument, options);
        }
export type ToolQueryHookResult = ReturnType<typeof useToolQuery>;
export type ToolLazyQueryHookResult = ReturnType<typeof useToolLazyQuery>;
export type ToolQueryResult = Apollo.QueryResult<ToolQuery, ToolQueryVariables>;