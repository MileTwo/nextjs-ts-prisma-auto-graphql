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
  _count?: Maybe<ToolCountAggregate>;
  _avg?: Maybe<ToolAvgAggregate>;
  _sum?: Maybe<ToolSumAggregate>;
  _min?: Maybe<ToolMinAggregate>;
  _max?: Maybe<ToolMaxAggregate>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type IntWithAggregatesFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  _count?: Maybe<NestedIntFilter>;
  _avg?: Maybe<NestedFloatFilter>;
  _sum?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTool: Tool;
  deleteTool?: Maybe<Tool>;
  updateTool?: Maybe<Tool>;
  deleteManyTool: AffectedRowsOutput;
  updateManyTool: AffectedRowsOutput;
  upsertTool: Tool;
};


export type MutationCreateToolArgs = {
  data: ToolCreateInput;
};


export type MutationDeleteToolArgs = {
  where: ToolWhereUniqueInput;
};


export type MutationUpdateToolArgs = {
  data: ToolUpdateInput;
  where: ToolWhereUniqueInput;
};


export type MutationDeleteManyToolArgs = {
  where?: Maybe<ToolWhereInput>;
};


export type MutationUpdateManyToolArgs = {
  data: ToolUpdateManyMutationInput;
  where?: Maybe<ToolWhereInput>;
};


export type MutationUpsertToolArgs = {
  where: ToolWhereUniqueInput;
  create: ToolCreateInput;
  update: ToolUpdateInput;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type NestedIntWithAggregatesFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  _count?: Maybe<NestedIntFilter>;
  _avg?: Maybe<NestedFloatFilter>;
  _sum?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
};

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type NestedStringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type NestedStringNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedStringNullableFilter>;
  _max?: Maybe<NestedStringNullableFilter>;
};

export type NestedStringWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  _count?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedStringFilter>;
  _max?: Maybe<NestedStringFilter>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  tool?: Maybe<Tool>;
  findFirstTool?: Maybe<Tool>;
  tools: Array<Tool>;
  aggregateTool: AggregateTool;
  groupByTool: Array<ToolGroupBy>;
};


export type QueryToolArgs = {
  where: ToolWhereUniqueInput;
};


export type QueryFindFirstToolArgs = {
  where?: Maybe<ToolWhereInput>;
  orderBy?: Maybe<Array<ToolOrderByInput>>;
  cursor?: Maybe<ToolWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<ToolScalarFieldEnum>>;
};


export type QueryToolsArgs = {
  where?: Maybe<ToolWhereInput>;
  orderBy?: Maybe<Array<ToolOrderByInput>>;
  cursor?: Maybe<ToolWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<ToolScalarFieldEnum>>;
};


export type QueryAggregateToolArgs = {
  where?: Maybe<ToolWhereInput>;
  orderBy?: Maybe<Array<ToolOrderByInput>>;
  cursor?: Maybe<ToolWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGroupByToolArgs = {
  where?: Maybe<ToolWhereInput>;
  orderBy?: Maybe<Array<ToolOrderByInput>>;
  by: Array<ToolScalarFieldEnum>;
  having?: Maybe<ToolScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type StringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type StringNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedStringNullableFilter>;
  _max?: Maybe<NestedStringNullableFilter>;
};

export type StringWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  _count?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedStringFilter>;
  _max?: Maybe<NestedStringFilter>;
};

export type Tool = {
  __typename?: 'Tool';
  id: Scalars['Int'];
  name: Scalars['String'];
  description: Scalars['String'];
  link: Scalars['String'];
  image?: Maybe<Scalars['String']>;
};

export type ToolAvgAggregate = {
  __typename?: 'ToolAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type ToolCountAggregate = {
  __typename?: 'ToolCountAggregate';
  id: Scalars['Int'];
  name: Scalars['Int'];
  description: Scalars['Int'];
  link: Scalars['Int'];
  image: Scalars['Int'];
  _all: Scalars['Int'];
};

export type ToolCreateInput = {
  name: Scalars['String'];
  description: Scalars['String'];
  link: Scalars['String'];
  image?: Maybe<Scalars['String']>;
};

export type ToolGroupBy = {
  __typename?: 'ToolGroupBy';
  id: Scalars['Int'];
  name: Scalars['String'];
  description: Scalars['String'];
  link: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  _count?: Maybe<ToolCountAggregate>;
  _avg?: Maybe<ToolAvgAggregate>;
  _sum?: Maybe<ToolSumAggregate>;
  _min?: Maybe<ToolMinAggregate>;
  _max?: Maybe<ToolMaxAggregate>;
};

export type ToolMaxAggregate = {
  __typename?: 'ToolMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
};

export type ToolMinAggregate = {
  __typename?: 'ToolMinAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
};

export type ToolOrderByInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  link?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
};

export enum ToolScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  Description = 'description',
  Link = 'link',
  Image = 'image'
}

export type ToolScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<ToolScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<ToolScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<ToolScalarWhereWithAggregatesInput>>;
  id?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  description?: Maybe<StringWithAggregatesFilter>;
  link?: Maybe<StringWithAggregatesFilter>;
  image?: Maybe<StringNullableWithAggregatesFilter>;
};

export type ToolSumAggregate = {
  __typename?: 'ToolSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type ToolUpdateInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  link?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type ToolUpdateManyMutationInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  link?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type ToolWhereInput = {
  AND?: Maybe<Array<ToolWhereInput>>;
  OR?: Maybe<Array<ToolWhereInput>>;
  NOT?: Maybe<Array<ToolWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  link?: Maybe<StringFilter>;
  image?: Maybe<StringNullableFilter>;
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


export type ToolsQuery = { __typename?: 'Query', tools: Array<{ __typename?: 'Tool', id: number, name: string, description: string, link: string, image?: Maybe<string> }> };

export type ToolQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ToolQuery = { __typename?: 'Query', tool?: Maybe<{ __typename?: 'Tool', id: number, name: string, description: string, link: string, image?: Maybe<string> }> };


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