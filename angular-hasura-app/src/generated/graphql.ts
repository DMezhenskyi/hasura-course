import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

export type Boolean_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _cast?: InputMaybe<Boolean_Cast_Exp>;
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type Credentials = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Int_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _cast?: InputMaybe<Int_Cast_Exp>;
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type LoginObject = {
  __typename?: 'LoginObject';
  accessToken: Scalars['String'];
  id: Scalars['String'];
};

export type SignupCredentials = {
  displayName?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

export type UploadResult = {
  __typename?: 'UploadResult';
  url: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  /** fetch data from the table: "comments" */
  comments: Array<Comments>;
  /** fetch aggregated fields from the table: "comments" */
  comments_aggregate: Comments_Aggregate;
  displayName?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['String'];
  /** fetch data from the table: "photos" */
  photos: Array<Photos>;
  /** fetch aggregated fields from the table: "photos" */
  photos_aggregate: Photos_Aggregate;
};


export type UserCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type UserComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type UserPhotosArgs = {
  distinct_on?: InputMaybe<Array<Photos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Photos_Order_By>>;
  where?: InputMaybe<Photos_Bool_Exp>;
};


export type UserPhotos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Photos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Photos_Order_By>>;
  where?: InputMaybe<Photos_Bool_Exp>;
};

export type UserProfile = {
  __typename?: 'UserProfile';
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** columns and relationships of "cities" */
export type Cities = {
  __typename?: 'cities';
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** aggregated selection of "cities" */
export type Cities_Aggregate = {
  __typename?: 'cities_aggregate';
  aggregate?: Maybe<Cities_Aggregate_Fields>;
  nodes: Array<Cities>;
};

/** aggregate fields of "cities" */
export type Cities_Aggregate_Fields = {
  __typename?: 'cities_aggregate_fields';
  avg?: Maybe<Cities_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Cities_Max_Fields>;
  min?: Maybe<Cities_Min_Fields>;
  stddev?: Maybe<Cities_Stddev_Fields>;
  stddev_pop?: Maybe<Cities_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Cities_Stddev_Samp_Fields>;
  sum?: Maybe<Cities_Sum_Fields>;
  var_pop?: Maybe<Cities_Var_Pop_Fields>;
  var_samp?: Maybe<Cities_Var_Samp_Fields>;
  variance?: Maybe<Cities_Variance_Fields>;
};


/** aggregate fields of "cities" */
export type Cities_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cities_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Cities_Avg_Fields = {
  __typename?: 'cities_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "cities". All fields are combined with a logical 'AND'. */
export type Cities_Bool_Exp = {
  _and?: InputMaybe<Array<Cities_Bool_Exp>>;
  _not?: InputMaybe<Cities_Bool_Exp>;
  _or?: InputMaybe<Array<Cities_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "cities" */
export enum Cities_Constraint {
  /** unique or primary key constraint on columns "id" */
  CitiesPkey = 'cities_pkey'
}

/** input type for incrementing numeric columns in table "cities" */
export type Cities_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "cities" */
export type Cities_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Cities_Max_Fields = {
  __typename?: 'cities_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Cities_Min_Fields = {
  __typename?: 'cities_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "cities" */
export type Cities_Mutation_Response = {
  __typename?: 'cities_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Cities>;
};

/** input type for inserting object relation for remote table "cities" */
export type Cities_Obj_Rel_Insert_Input = {
  data: Cities_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Cities_On_Conflict>;
};

/** on_conflict condition type for table "cities" */
export type Cities_On_Conflict = {
  constraint: Cities_Constraint;
  update_columns?: Array<Cities_Update_Column>;
  where?: InputMaybe<Cities_Bool_Exp>;
};

/** Ordering options when selecting data from "cities". */
export type Cities_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cities */
export type Cities_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "cities" */
export enum Cities_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "cities" */
export type Cities_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Cities_Stddev_Fields = {
  __typename?: 'cities_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Cities_Stddev_Pop_Fields = {
  __typename?: 'cities_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Cities_Stddev_Samp_Fields = {
  __typename?: 'cities_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Cities_Sum_Fields = {
  __typename?: 'cities_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "cities" */
export enum Cities_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Cities_Var_Pop_Fields = {
  __typename?: 'cities_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Cities_Var_Samp_Fields = {
  __typename?: 'cities_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Cities_Variance_Fields = {
  __typename?: 'cities_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "comments" */
export type Comments = {
  __typename?: 'comments';
  comment: Scalars['String'];
  created_at: Scalars['timestamptz'];
  firebase_user_profile?: Maybe<UserProfile>;
  id: Scalars['uuid'];
  is_published?: Maybe<Scalars['Boolean']>;
  photo_id: Scalars['uuid'];
  reviewed_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregated selection of "comments" */
export type Comments_Aggregate = {
  __typename?: 'comments_aggregate';
  aggregate?: Maybe<Comments_Aggregate_Fields>;
  nodes: Array<Comments>;
};

/** aggregate fields of "comments" */
export type Comments_Aggregate_Fields = {
  __typename?: 'comments_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Comments_Max_Fields>;
  min?: Maybe<Comments_Min_Fields>;
};


/** aggregate fields of "comments" */
export type Comments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Comments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "comments" */
export type Comments_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Comments_Max_Order_By>;
  min?: InputMaybe<Comments_Min_Order_By>;
};

/** input type for inserting array relation for remote table "comments" */
export type Comments_Arr_Rel_Insert_Input = {
  data: Array<Comments_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Comments_On_Conflict>;
};

/** Boolean expression to filter rows from the table "comments". All fields are combined with a logical 'AND'. */
export type Comments_Bool_Exp = {
  _and?: InputMaybe<Array<Comments_Bool_Exp>>;
  _not?: InputMaybe<Comments_Bool_Exp>;
  _or?: InputMaybe<Array<Comments_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_published?: InputMaybe<Boolean_Comparison_Exp>;
  photo_id?: InputMaybe<Uuid_Comparison_Exp>;
  reviewed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "comments" */
export enum Comments_Constraint {
  /** unique or primary key constraint on columns "id" */
  CommentsPkey = 'comments_pkey'
}

/** input type for inserting data into table "comments" */
export type Comments_Insert_Input = {
  comment?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_published?: InputMaybe<Scalars['Boolean']>;
  photo_id?: InputMaybe<Scalars['uuid']>;
  reviewed_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Comments_Max_Fields = {
  __typename?: 'comments_max_fields';
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  photo_id?: Maybe<Scalars['uuid']>;
  reviewed_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "comments" */
export type Comments_Max_Order_By = {
  comment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  photo_id?: InputMaybe<Order_By>;
  reviewed_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Comments_Min_Fields = {
  __typename?: 'comments_min_fields';
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  photo_id?: Maybe<Scalars['uuid']>;
  reviewed_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "comments" */
export type Comments_Min_Order_By = {
  comment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  photo_id?: InputMaybe<Order_By>;
  reviewed_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "comments" */
export type Comments_Mutation_Response = {
  __typename?: 'comments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Comments>;
};

/** on_conflict condition type for table "comments" */
export type Comments_On_Conflict = {
  constraint: Comments_Constraint;
  update_columns?: Array<Comments_Update_Column>;
  where?: InputMaybe<Comments_Bool_Exp>;
};

/** Ordering options when selecting data from "comments". */
export type Comments_Order_By = {
  comment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_published?: InputMaybe<Order_By>;
  photo_id?: InputMaybe<Order_By>;
  reviewed_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: comments */
export type Comments_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "comments" */
export enum Comments_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsPublished = 'is_published',
  /** column name */
  PhotoId = 'photo_id',
  /** column name */
  ReviewedAt = 'reviewed_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "comments" */
export type Comments_Set_Input = {
  comment?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_published?: InputMaybe<Scalars['Boolean']>;
  photo_id?: InputMaybe<Scalars['uuid']>;
  reviewed_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "comments" */
export enum Comments_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsPublished = 'is_published',
  /** column name */
  PhotoId = 'photo_id',
  /** column name */
  ReviewedAt = 'reviewed_at',
  /** column name */
  UserId = 'user_id'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  create_user?: Maybe<User>;
  /** delete data from the table: "cities" */
  delete_cities?: Maybe<Cities_Mutation_Response>;
  /** delete single row from the table: "cities" */
  delete_cities_by_pk?: Maybe<Cities>;
  /** delete data from the table: "comments" */
  delete_comments?: Maybe<Comments_Mutation_Response>;
  /** delete single row from the table: "comments" */
  delete_comments_by_pk?: Maybe<Comments>;
  /** delete data from the table: "photos" */
  delete_photos?: Maybe<Photos_Mutation_Response>;
  /** delete single row from the table: "photos" */
  delete_photos_by_pk?: Maybe<Photos>;
  /** insert data into the table: "cities" */
  insert_cities?: Maybe<Cities_Mutation_Response>;
  /** insert a single row into the table: "cities" */
  insert_cities_one?: Maybe<Cities>;
  /** insert data into the table: "comments" */
  insert_comments?: Maybe<Comments_Mutation_Response>;
  /** insert a single row into the table: "comments" */
  insert_comments_one?: Maybe<Comments>;
  /** insert data into the table: "photos" */
  insert_photos?: Maybe<Photos_Mutation_Response>;
  /** insert a single row into the table: "photos" */
  insert_photos_one?: Maybe<Photos>;
  login?: Maybe<LoginObject>;
  /** update data of the table: "cities" */
  update_cities?: Maybe<Cities_Mutation_Response>;
  /** update single row of the table: "cities" */
  update_cities_by_pk?: Maybe<Cities>;
  /** update data of the table: "comments" */
  update_comments?: Maybe<Comments_Mutation_Response>;
  /** update single row of the table: "comments" */
  update_comments_by_pk?: Maybe<Comments>;
  /** update data of the table: "photos" */
  update_photos?: Maybe<Photos_Mutation_Response>;
  /** update single row of the table: "photos" */
  update_photos_by_pk?: Maybe<Photos>;
  upload_photo?: Maybe<UploadResult>;
};


/** mutation root */
export type Mutation_RootCreate_UserArgs = {
  credentials: SignupCredentials;
};


/** mutation root */
export type Mutation_RootDelete_CitiesArgs = {
  where: Cities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cities_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_CommentsArgs = {
  where: Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Comments_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_PhotosArgs = {
  where: Photos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Photos_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_CitiesArgs = {
  objects: Array<Cities_Insert_Input>;
  on_conflict?: InputMaybe<Cities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cities_OneArgs = {
  object: Cities_Insert_Input;
  on_conflict?: InputMaybe<Cities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CommentsArgs = {
  objects: Array<Comments_Insert_Input>;
  on_conflict?: InputMaybe<Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Comments_OneArgs = {
  object: Comments_Insert_Input;
  on_conflict?: InputMaybe<Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PhotosArgs = {
  objects: Array<Photos_Insert_Input>;
  on_conflict?: InputMaybe<Photos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Photos_OneArgs = {
  object: Photos_Insert_Input;
  on_conflict?: InputMaybe<Photos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootLoginArgs = {
  credentials: Credentials;
};


/** mutation root */
export type Mutation_RootUpdate_CitiesArgs = {
  _inc?: InputMaybe<Cities_Inc_Input>;
  _set?: InputMaybe<Cities_Set_Input>;
  where: Cities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cities_By_PkArgs = {
  _inc?: InputMaybe<Cities_Inc_Input>;
  _set?: InputMaybe<Cities_Set_Input>;
  pk_columns: Cities_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CommentsArgs = {
  _set?: InputMaybe<Comments_Set_Input>;
  where: Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Comments_By_PkArgs = {
  _set?: InputMaybe<Comments_Set_Input>;
  pk_columns: Comments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PhotosArgs = {
  _inc?: InputMaybe<Photos_Inc_Input>;
  _set?: InputMaybe<Photos_Set_Input>;
  where: Photos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Photos_By_PkArgs = {
  _inc?: InputMaybe<Photos_Inc_Input>;
  _set?: InputMaybe<Photos_Set_Input>;
  pk_columns: Photos_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpload_PhotoArgs = {
  base64image: Scalars['String'];
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** This is all photos uploaded by users */
export type Photos = {
  __typename?: 'photos';
  /** An object relationship */
  city?: Maybe<Cities>;
  city_id?: Maybe<Scalars['Int']>;
  /** fetch data from the table: "comments" */
  comments: Array<Comments>;
  /** fetch aggregated fields from the table: "comments" */
  comments_aggregate: Comments_Aggregate;
  created_at: Scalars['timestamptz'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  description: Scalars['String'];
  firebase_user_profile?: Maybe<UserProfile>;
  id: Scalars['uuid'];
  is_published: Scalars['Boolean'];
  photo_url: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  user_id?: Maybe<Scalars['String']>;
};


/** This is all photos uploaded by users */
export type PhotosCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** This is all photos uploaded by users */
export type PhotosComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};

/** aggregated selection of "photos" */
export type Photos_Aggregate = {
  __typename?: 'photos_aggregate';
  aggregate?: Maybe<Photos_Aggregate_Fields>;
  nodes: Array<Photos>;
};

/** aggregate fields of "photos" */
export type Photos_Aggregate_Fields = {
  __typename?: 'photos_aggregate_fields';
  avg?: Maybe<Photos_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Photos_Max_Fields>;
  min?: Maybe<Photos_Min_Fields>;
  stddev?: Maybe<Photos_Stddev_Fields>;
  stddev_pop?: Maybe<Photos_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Photos_Stddev_Samp_Fields>;
  sum?: Maybe<Photos_Sum_Fields>;
  var_pop?: Maybe<Photos_Var_Pop_Fields>;
  var_samp?: Maybe<Photos_Var_Samp_Fields>;
  variance?: Maybe<Photos_Variance_Fields>;
};


/** aggregate fields of "photos" */
export type Photos_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Photos_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Photos_Avg_Fields = {
  __typename?: 'photos_avg_fields';
  city_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "photos". All fields are combined with a logical 'AND'. */
export type Photos_Bool_Exp = {
  _and?: InputMaybe<Array<Photos_Bool_Exp>>;
  _not?: InputMaybe<Photos_Bool_Exp>;
  _or?: InputMaybe<Array<Photos_Bool_Exp>>;
  city?: InputMaybe<Cities_Bool_Exp>;
  city_id?: InputMaybe<Int_Comparison_Exp>;
  comments?: InputMaybe<Comments_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_published?: InputMaybe<Boolean_Comparison_Exp>;
  photo_url?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "photos" */
export enum Photos_Constraint {
  /** unique or primary key constraint on columns "id" */
  PhotosPkey = 'photos_pkey'
}

/** input type for incrementing numeric columns in table "photos" */
export type Photos_Inc_Input = {
  city_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "photos" */
export type Photos_Insert_Input = {
  city?: InputMaybe<Cities_Obj_Rel_Insert_Input>;
  city_id?: InputMaybe<Scalars['Int']>;
  comments?: InputMaybe<Comments_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_published?: InputMaybe<Scalars['Boolean']>;
  photo_url?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Photos_Max_Fields = {
  __typename?: 'photos_max_fields';
  city_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  photo_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Photos_Min_Fields = {
  __typename?: 'photos_min_fields';
  city_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  photo_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "photos" */
export type Photos_Mutation_Response = {
  __typename?: 'photos_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Photos>;
};

/** on_conflict condition type for table "photos" */
export type Photos_On_Conflict = {
  constraint: Photos_Constraint;
  update_columns?: Array<Photos_Update_Column>;
  where?: InputMaybe<Photos_Bool_Exp>;
};

/** Ordering options when selecting data from "photos". */
export type Photos_Order_By = {
  city?: InputMaybe<Cities_Order_By>;
  city_id?: InputMaybe<Order_By>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_published?: InputMaybe<Order_By>;
  photo_url?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: photos */
export type Photos_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "photos" */
export enum Photos_Select_Column {
  /** column name */
  CityId = 'city_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsPublished = 'is_published',
  /** column name */
  PhotoUrl = 'photo_url',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "photos" */
export type Photos_Set_Input = {
  city_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_published?: InputMaybe<Scalars['Boolean']>;
  photo_url?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Photos_Stddev_Fields = {
  __typename?: 'photos_stddev_fields';
  city_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Photos_Stddev_Pop_Fields = {
  __typename?: 'photos_stddev_pop_fields';
  city_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Photos_Stddev_Samp_Fields = {
  __typename?: 'photos_stddev_samp_fields';
  city_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Photos_Sum_Fields = {
  __typename?: 'photos_sum_fields';
  city_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "photos" */
export enum Photos_Update_Column {
  /** column name */
  CityId = 'city_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsPublished = 'is_published',
  /** column name */
  PhotoUrl = 'photo_url',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Photos_Var_Pop_Fields = {
  __typename?: 'photos_var_pop_fields';
  city_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Photos_Var_Samp_Fields = {
  __typename?: 'photos_var_samp_fields';
  city_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Photos_Variance_Fields = {
  __typename?: 'photos_variance_fields';
  city_id?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "cities" */
  cities: Array<Cities>;
  /** fetch aggregated fields from the table: "cities" */
  cities_aggregate: Cities_Aggregate;
  /** fetch data from the table: "cities" using primary key columns */
  cities_by_pk?: Maybe<Cities>;
  /** fetch data from the table: "comments" */
  comments: Array<Comments>;
  /** fetch aggregated fields from the table: "comments" */
  comments_aggregate: Comments_Aggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  firebase_user_profile?: Maybe<UserProfile>;
  /** fetch data from the table: "photos" */
  photos: Array<Photos>;
  /** fetch aggregated fields from the table: "photos" */
  photos_aggregate: Photos_Aggregate;
  /** fetch data from the table: "photos" using primary key columns */
  photos_by_pk?: Maybe<Photos>;
  user_profile?: Maybe<User>;
};


export type Query_RootCitiesArgs = {
  distinct_on?: InputMaybe<Array<Cities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cities_Order_By>>;
  where?: InputMaybe<Cities_Bool_Exp>;
};


export type Query_RootCities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cities_Order_By>>;
  where?: InputMaybe<Cities_Bool_Exp>;
};


export type Query_RootCities_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Query_RootComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Query_RootComments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFirebase_User_ProfileArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type Query_RootPhotosArgs = {
  distinct_on?: InputMaybe<Array<Photos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Photos_Order_By>>;
  where?: InputMaybe<Photos_Bool_Exp>;
};


export type Query_RootPhotos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Photos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Photos_Order_By>>;
  where?: InputMaybe<Photos_Bool_Exp>;
};


export type Query_RootPhotos_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUser_ProfileArgs = {
  id: Scalars['String'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "cities" */
  cities: Array<Cities>;
  /** fetch aggregated fields from the table: "cities" */
  cities_aggregate: Cities_Aggregate;
  /** fetch data from the table: "cities" using primary key columns */
  cities_by_pk?: Maybe<Cities>;
  /** fetch data from the table: "comments" */
  comments: Array<Comments>;
  /** fetch aggregated fields from the table: "comments" */
  comments_aggregate: Comments_Aggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  /** fetch data from the table: "photos" */
  photos: Array<Photos>;
  /** fetch aggregated fields from the table: "photos" */
  photos_aggregate: Photos_Aggregate;
  /** fetch data from the table: "photos" using primary key columns */
  photos_by_pk?: Maybe<Photos>;
};


export type Subscription_RootCitiesArgs = {
  distinct_on?: InputMaybe<Array<Cities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cities_Order_By>>;
  where?: InputMaybe<Cities_Bool_Exp>;
};


export type Subscription_RootCities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cities_Order_By>>;
  where?: InputMaybe<Cities_Bool_Exp>;
};


export type Subscription_RootCities_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Subscription_RootComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Subscription_RootComments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPhotosArgs = {
  distinct_on?: InputMaybe<Array<Photos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Photos_Order_By>>;
  where?: InputMaybe<Photos_Bool_Exp>;
};


export type Subscription_RootPhotos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Photos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Photos_Order_By>>;
  where?: InputMaybe<Photos_Bool_Exp>;
};


export type Subscription_RootPhotos_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Timestamptz_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _cast?: InputMaybe<Timestamptz_Cast_Exp>;
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

export type Uuid_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _cast?: InputMaybe<Uuid_Cast_Exp>;
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetPhotoQueryVariables = Exact<{
  photoId: Scalars['uuid'];
}>;


export type GetPhotoQuery = { __typename?: 'query_root', photos_by_pk?: { __typename?: 'photos', id: any, description: string, created_at: any, photo_url: string, comments: Array<{ __typename?: 'comments', id: any, comment: string, created_at: any, firebase_user_profile?: { __typename?: 'UserProfile', displayName?: string | null } | null }> } | null };

export type InsertCommentMutationVariables = Exact<{
  comment: Scalars['String'];
  photoId: Scalars['uuid'];
}>;


export type InsertCommentMutation = { __typename?: 'mutation_root', insert_comments_one?: { __typename?: 'comments', id: any, comment: string, created_at: any, firebase_user_profile?: { __typename?: 'UserProfile', displayName?: string | null } | null } | null };

export type GetUserPhotosQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetUserPhotosQuery = { __typename?: 'query_root', photos: Array<{ __typename?: 'photos', id: any, photo_url: string, created_at: any, firebase_user_profile?: { __typename?: 'UserProfile', displayName?: string | null } | null, comments_aggregate: { __typename?: 'comments_aggregate', aggregate?: { __typename?: 'comments_aggregate_fields', count: number } | null } }> };

export type GetProfileQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetProfileQuery = { __typename?: 'query_root', user_profile?: { __typename?: 'User', id: string, email: string, displayName?: string | null } | null };

export type SigninMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SigninMutation = { __typename?: 'mutation_root', login?: { __typename?: 'LoginObject', id: string, accessToken: string } | null };

export type SignupMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  displayName: Scalars['String'];
}>;


export type SignupMutation = { __typename?: 'mutation_root', create_user?: { __typename?: 'User', id: string, email: string, displayName?: string | null } | null };

export type UploadPhotoMutationVariables = Exact<{
  base64image: Scalars['String'];
}>;


export type UploadPhotoMutation = { __typename?: 'mutation_root', upload_photo?: { __typename?: 'UploadResult', url: string } | null };

export type InsertPhotoMutationVariables = Exact<{
  photoUrl: Scalars['String'];
  description: Scalars['String'];
}>;


export type InsertPhotoMutation = { __typename?: 'mutation_root', insert_photos?: { __typename?: 'photos_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'photos', description: string, photo_url: string, created_at: any }> } | null };

export const GetPhotoDocument = gql`
    query getPhoto($photoId: uuid!) {
  photos_by_pk(id: $photoId) {
    id
    description
    created_at
    photo_url
    comments {
      id
      comment
      created_at
      firebase_user_profile {
        displayName
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetPhotoGQL extends Apollo.Query<GetPhotoQuery, GetPhotoQueryVariables> {
    document = GetPhotoDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const InsertCommentDocument = gql`
    mutation InsertComment($comment: String!, $photoId: uuid!) {
  insert_comments_one(object: {comment: $comment, photo_id: $photoId}) {
    id
    comment
    created_at
    firebase_user_profile {
      displayName
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InsertCommentGQL extends Apollo.Mutation<InsertCommentMutation, InsertCommentMutationVariables> {
    document = InsertCommentDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetUserPhotosDocument = gql`
    query GetUserPhotos($userId: String!) {
  photos(where: {user_id: {_eq: $userId}}) {
    id
    photo_url
    created_at
    firebase_user_profile {
      displayName
    }
    comments_aggregate {
      aggregate {
        count
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUserPhotosGQL extends Apollo.Query<GetUserPhotosQuery, GetUserPhotosQueryVariables> {
    document = GetUserPhotosDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetProfileDocument = gql`
    query GetProfile($id: String!) {
  user_profile(id: $id) {
    id
    email
    displayName
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetProfileGQL extends Apollo.Query<GetProfileQuery, GetProfileQueryVariables> {
    document = GetProfileDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SigninDocument = gql`
    mutation Signin($email: String!, $password: String!) {
  login(credentials: {email: $email, password: $password}) {
    id
    accessToken
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SigninGQL extends Apollo.Mutation<SigninMutation, SigninMutationVariables> {
    document = SigninDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SignupDocument = gql`
    mutation Signup($email: String!, $password: String!, $displayName: String!) {
  create_user(
    credentials: {email: $email, password: $password, displayName: $displayName}
  ) {
    id
    email
    displayName
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SignupGQL extends Apollo.Mutation<SignupMutation, SignupMutationVariables> {
    document = SignupDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UploadPhotoDocument = gql`
    mutation UploadPhoto($base64image: String!) {
  upload_photo(base64image: $base64image) {
    url
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UploadPhotoGQL extends Apollo.Mutation<UploadPhotoMutation, UploadPhotoMutationVariables> {
    document = UploadPhotoDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const InsertPhotoDocument = gql`
    mutation InsertPhoto($photoUrl: String!, $description: String!) {
  insert_photos(objects: {photo_url: $photoUrl, description: $description}) {
    affected_rows
    returning {
      description
      photo_url
      created_at
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InsertPhotoGQL extends Apollo.Mutation<InsertPhotoMutation, InsertPhotoMutationVariables> {
    document = InsertPhotoDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }