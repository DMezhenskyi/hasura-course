import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
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
  json: any;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Credentials = {
  email: Scalars['String'];
  password: Scalars['String'];
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type LoginObject = {
  __typename?: 'LoginObject';
  accessToken: Scalars['String'];
  id: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  firebase_user_profile?: Maybe<UserProfile>;
};


export type QueryFirebase_User_ProfileArgs = {
  id?: Maybe<Scalars['String']>;
};

export type SignupCredentials = {
  displayName?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

export type UploadResult = {
  __typename?: 'UploadResult';
  url: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  comments?: Maybe<Array<Maybe<Comments>>>;
  displayName?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['String'];
  photos?: Maybe<Array<Maybe<Photos>>>;
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
  count?: Maybe<Scalars['Int']>;
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
  columns?: Maybe<Array<Cities_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "cities" */
export type Cities_Aggregate_Order_By = {
  avg?: Maybe<Cities_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Cities_Max_Order_By>;
  min?: Maybe<Cities_Min_Order_By>;
  stddev?: Maybe<Cities_Stddev_Order_By>;
  stddev_pop?: Maybe<Cities_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Cities_Stddev_Samp_Order_By>;
  sum?: Maybe<Cities_Sum_Order_By>;
  var_pop?: Maybe<Cities_Var_Pop_Order_By>;
  var_samp?: Maybe<Cities_Var_Samp_Order_By>;
  variance?: Maybe<Cities_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "cities" */
export type Cities_Arr_Rel_Insert_Input = {
  data: Array<Cities_Insert_Input>;
  on_conflict?: Maybe<Cities_On_Conflict>;
};

/** aggregate avg on columns */
export type Cities_Avg_Fields = {
  __typename?: 'cities_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "cities" */
export type Cities_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "cities". All fields are combined with a logical 'AND'. */
export type Cities_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Cities_Bool_Exp>>>;
  _not?: Maybe<Cities_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Cities_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "cities" */
export enum Cities_Constraint {
  /** unique or primary key constraint */
  CitiesPkey = 'cities_pkey'
}

/** input type for incrementing integer column in table "cities" */
export type Cities_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "cities" */
export type Cities_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Cities_Max_Fields = {
  __typename?: 'cities_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "cities" */
export type Cities_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Cities_Min_Fields = {
  __typename?: 'cities_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "cities" */
export type Cities_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "cities" */
export type Cities_Mutation_Response = {
  __typename?: 'cities_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Cities>;
};

/** input type for inserting object relation for remote table "cities" */
export type Cities_Obj_Rel_Insert_Input = {
  data: Cities_Insert_Input;
  on_conflict?: Maybe<Cities_On_Conflict>;
};

/** on conflict condition type for table "cities" */
export type Cities_On_Conflict = {
  constraint: Cities_Constraint;
  update_columns: Array<Cities_Update_Column>;
  where?: Maybe<Cities_Bool_Exp>;
};

/** ordering options when selecting data from "cities" */
export type Cities_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "cities" */
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
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Cities_Stddev_Fields = {
  __typename?: 'cities_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "cities" */
export type Cities_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Cities_Stddev_Pop_Fields = {
  __typename?: 'cities_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "cities" */
export type Cities_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Cities_Stddev_Samp_Fields = {
  __typename?: 'cities_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "cities" */
export type Cities_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Cities_Sum_Fields = {
  __typename?: 'cities_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "cities" */
export type Cities_Sum_Order_By = {
  id?: Maybe<Order_By>;
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

/** order by var_pop() on columns of table "cities" */
export type Cities_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Cities_Var_Samp_Fields = {
  __typename?: 'cities_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "cities" */
export type Cities_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Cities_Variance_Fields = {
  __typename?: 'cities_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "cities" */
export type Cities_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "comments" */
export type Comments = {
  __typename?: 'comments';
  comment: Scalars['String'];
  created_at: Scalars['timestamptz'];
  /** Remote relationship field */
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
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Comments_Max_Fields>;
  min?: Maybe<Comments_Min_Fields>;
};


/** aggregate fields of "comments" */
export type Comments_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Comments_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "comments" */
export type Comments_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Comments_Max_Order_By>;
  min?: Maybe<Comments_Min_Order_By>;
};

/** input type for inserting array relation for remote table "comments" */
export type Comments_Arr_Rel_Insert_Input = {
  data: Array<Comments_Insert_Input>;
  on_conflict?: Maybe<Comments_On_Conflict>;
};

/** Boolean expression to filter rows from the table "comments". All fields are combined with a logical 'AND'. */
export type Comments_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Comments_Bool_Exp>>>;
  _not?: Maybe<Comments_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Comments_Bool_Exp>>>;
  comment?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  is_published?: Maybe<Boolean_Comparison_Exp>;
  photo_id?: Maybe<Uuid_Comparison_Exp>;
  reviewed_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "comments" */
export enum Comments_Constraint {
  /** unique or primary key constraint */
  CommentsPkey = 'comments_pkey'
}

/** input type for inserting data into table "comments" */
export type Comments_Insert_Input = {
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  is_published?: Maybe<Scalars['Boolean']>;
  photo_id?: Maybe<Scalars['uuid']>;
  reviewed_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
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
  comment?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  photo_id?: Maybe<Order_By>;
  reviewed_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
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
  comment?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  photo_id?: Maybe<Order_By>;
  reviewed_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "comments" */
export type Comments_Mutation_Response = {
  __typename?: 'comments_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Comments>;
};

/** input type for inserting object relation for remote table "comments" */
export type Comments_Obj_Rel_Insert_Input = {
  data: Comments_Insert_Input;
  on_conflict?: Maybe<Comments_On_Conflict>;
};

/** on conflict condition type for table "comments" */
export type Comments_On_Conflict = {
  constraint: Comments_Constraint;
  update_columns: Array<Comments_Update_Column>;
  where?: Maybe<Comments_Bool_Exp>;
};

/** ordering options when selecting data from "comments" */
export type Comments_Order_By = {
  comment?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_published?: Maybe<Order_By>;
  photo_id?: Maybe<Order_By>;
  reviewed_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "comments" */
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
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  is_published?: Maybe<Scalars['Boolean']>;
  photo_id?: Maybe<Scalars['uuid']>;
  reviewed_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
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


/** expression to compare columns of type json. All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: Maybe<Scalars['json']>;
  _gt?: Maybe<Scalars['json']>;
  _gte?: Maybe<Scalars['json']>;
  _in?: Maybe<Array<Scalars['json']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['json']>;
  _lte?: Maybe<Scalars['json']>;
  _neq?: Maybe<Scalars['json']>;
  _nin?: Maybe<Array<Scalars['json']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** perform the action: "create_user" */
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
  /** perform the action: "login" */
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
  /** perform the action: "upload_photo" */
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
  on_conflict?: Maybe<Cities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cities_OneArgs = {
  object: Cities_Insert_Input;
  on_conflict?: Maybe<Cities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CommentsArgs = {
  objects: Array<Comments_Insert_Input>;
  on_conflict?: Maybe<Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Comments_OneArgs = {
  object: Comments_Insert_Input;
  on_conflict?: Maybe<Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PhotosArgs = {
  objects: Array<Photos_Insert_Input>;
  on_conflict?: Maybe<Photos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Photos_OneArgs = {
  object: Photos_Insert_Input;
  on_conflict?: Maybe<Photos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootLoginArgs = {
  credentials: Credentials;
};


/** mutation root */
export type Mutation_RootUpdate_CitiesArgs = {
  _inc?: Maybe<Cities_Inc_Input>;
  _set?: Maybe<Cities_Set_Input>;
  where: Cities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cities_By_PkArgs = {
  _inc?: Maybe<Cities_Inc_Input>;
  _set?: Maybe<Cities_Set_Input>;
  pk_columns: Cities_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CommentsArgs = {
  _set?: Maybe<Comments_Set_Input>;
  where: Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Comments_By_PkArgs = {
  _set?: Maybe<Comments_Set_Input>;
  pk_columns: Comments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PhotosArgs = {
  _inc?: Maybe<Photos_Inc_Input>;
  _set?: Maybe<Photos_Set_Input>;
  where: Photos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Photos_By_PkArgs = {
  _inc?: Maybe<Photos_Inc_Input>;
  _set?: Maybe<Photos_Set_Input>;
  pk_columns: Photos_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpload_PhotoArgs = {
  base64image: Scalars['String'];
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/**
 * This is all photos uploaded by users
 * 
 * 
 * columns and relationships of "photos"
 */
export type Photos = {
  __typename?: 'photos';
  /** An object relationship */
  city?: Maybe<Cities>;
  city_id?: Maybe<Scalars['Int']>;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregated array relationship */
  comments_aggregate: Comments_Aggregate;
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  /** Remote relationship field */
  firebase_user_profile?: Maybe<UserProfile>;
  id: Scalars['uuid'];
  is_published: Scalars['Boolean'];
  photo_url: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  user_id?: Maybe<Scalars['String']>;
};


/**
 * This is all photos uploaded by users
 * 
 * 
 * columns and relationships of "photos"
 */
export type PhotosCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


/**
 * This is all photos uploaded by users
 * 
 * 
 * columns and relationships of "photos"
 */
export type PhotosComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
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
  count?: Maybe<Scalars['Int']>;
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
  columns?: Maybe<Array<Photos_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "photos" */
export type Photos_Aggregate_Order_By = {
  avg?: Maybe<Photos_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Photos_Max_Order_By>;
  min?: Maybe<Photos_Min_Order_By>;
  stddev?: Maybe<Photos_Stddev_Order_By>;
  stddev_pop?: Maybe<Photos_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Photos_Stddev_Samp_Order_By>;
  sum?: Maybe<Photos_Sum_Order_By>;
  var_pop?: Maybe<Photos_Var_Pop_Order_By>;
  var_samp?: Maybe<Photos_Var_Samp_Order_By>;
  variance?: Maybe<Photos_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "photos" */
export type Photos_Arr_Rel_Insert_Input = {
  data: Array<Photos_Insert_Input>;
  on_conflict?: Maybe<Photos_On_Conflict>;
};

/** aggregate avg on columns */
export type Photos_Avg_Fields = {
  __typename?: 'photos_avg_fields';
  city_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "photos" */
export type Photos_Avg_Order_By = {
  city_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "photos". All fields are combined with a logical 'AND'. */
export type Photos_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Photos_Bool_Exp>>>;
  _not?: Maybe<Photos_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Photos_Bool_Exp>>>;
  city?: Maybe<Cities_Bool_Exp>;
  city_id?: Maybe<Int_Comparison_Exp>;
  comments?: Maybe<Comments_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  is_published?: Maybe<Boolean_Comparison_Exp>;
  photo_url?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "photos" */
export enum Photos_Constraint {
  /** unique or primary key constraint */
  PhotosPkey = 'photos_pkey'
}

/** input type for incrementing integer column in table "photos" */
export type Photos_Inc_Input = {
  city_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "photos" */
export type Photos_Insert_Input = {
  city?: Maybe<Cities_Obj_Rel_Insert_Input>;
  city_id?: Maybe<Scalars['Int']>;
  comments?: Maybe<Comments_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  is_published?: Maybe<Scalars['Boolean']>;
  photo_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Photos_Max_Fields = {
  __typename?: 'photos_max_fields';
  city_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  photo_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "photos" */
export type Photos_Max_Order_By = {
  city_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  photo_url?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Photos_Min_Fields = {
  __typename?: 'photos_min_fields';
  city_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  photo_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "photos" */
export type Photos_Min_Order_By = {
  city_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  photo_url?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "photos" */
export type Photos_Mutation_Response = {
  __typename?: 'photos_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Photos>;
};

/** input type for inserting object relation for remote table "photos" */
export type Photos_Obj_Rel_Insert_Input = {
  data: Photos_Insert_Input;
  on_conflict?: Maybe<Photos_On_Conflict>;
};

/** on conflict condition type for table "photos" */
export type Photos_On_Conflict = {
  constraint: Photos_Constraint;
  update_columns: Array<Photos_Update_Column>;
  where?: Maybe<Photos_Bool_Exp>;
};

/** ordering options when selecting data from "photos" */
export type Photos_Order_By = {
  city?: Maybe<Cities_Order_By>;
  city_id?: Maybe<Order_By>;
  comments_aggregate?: Maybe<Comments_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_published?: Maybe<Order_By>;
  photo_url?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "photos" */
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
  city_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  is_published?: Maybe<Scalars['Boolean']>;
  photo_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Photos_Stddev_Fields = {
  __typename?: 'photos_stddev_fields';
  city_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "photos" */
export type Photos_Stddev_Order_By = {
  city_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Photos_Stddev_Pop_Fields = {
  __typename?: 'photos_stddev_pop_fields';
  city_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "photos" */
export type Photos_Stddev_Pop_Order_By = {
  city_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Photos_Stddev_Samp_Fields = {
  __typename?: 'photos_stddev_samp_fields';
  city_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "photos" */
export type Photos_Stddev_Samp_Order_By = {
  city_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Photos_Sum_Fields = {
  __typename?: 'photos_sum_fields';
  city_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "photos" */
export type Photos_Sum_Order_By = {
  city_id?: Maybe<Order_By>;
};

/** update columns of table "photos" */
export enum Photos_Update_Column {
  /** column name */
  CityId = 'city_id',
  /** column name */
  CreatedAt = 'created_at',
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

/** order by var_pop() on columns of table "photos" */
export type Photos_Var_Pop_Order_By = {
  city_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Photos_Var_Samp_Fields = {
  __typename?: 'photos_var_samp_fields';
  city_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "photos" */
export type Photos_Var_Samp_Order_By = {
  city_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Photos_Variance_Fields = {
  __typename?: 'photos_variance_fields';
  city_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "photos" */
export type Photos_Variance_Order_By = {
  city_id?: Maybe<Order_By>;
};

/** query root */
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
  /** perform the action: "user_profile" */
  user_profile?: Maybe<User>;
};


/** query root */
export type Query_RootCitiesArgs = {
  distinct_on?: Maybe<Array<Cities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cities_Order_By>>;
  where?: Maybe<Cities_Bool_Exp>;
};


/** query root */
export type Query_RootCities_AggregateArgs = {
  distinct_on?: Maybe<Array<Cities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cities_Order_By>>;
  where?: Maybe<Cities_Bool_Exp>;
};


/** query root */
export type Query_RootCities_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


/** query root */
export type Query_RootComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


/** query root */
export type Query_RootComments_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootFirebase_User_ProfileArgs = {
  id?: Maybe<Scalars['String']>;
};


/** query root */
export type Query_RootPhotosArgs = {
  distinct_on?: Maybe<Array<Photos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Photos_Order_By>>;
  where?: Maybe<Photos_Bool_Exp>;
};


/** query root */
export type Query_RootPhotos_AggregateArgs = {
  distinct_on?: Maybe<Array<Photos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Photos_Order_By>>;
  where?: Maybe<Photos_Bool_Exp>;
};


/** query root */
export type Query_RootPhotos_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootUser_ProfileArgs = {
  id: Scalars['String'];
};

/** subscription root */
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
  /** perform the action: "user_profile" */
  user_profile?: Maybe<User>;
};


/** subscription root */
export type Subscription_RootCitiesArgs = {
  distinct_on?: Maybe<Array<Cities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cities_Order_By>>;
  where?: Maybe<Cities_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCities_AggregateArgs = {
  distinct_on?: Maybe<Array<Cities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cities_Order_By>>;
  where?: Maybe<Cities_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCities_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootComments_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootPhotosArgs = {
  distinct_on?: Maybe<Array<Photos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Photos_Order_By>>;
  where?: Maybe<Photos_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPhotos_AggregateArgs = {
  distinct_on?: Maybe<Array<Photos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Photos_Order_By>>;
  where?: Maybe<Photos_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPhotos_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootUser_ProfileArgs = {
  id: Scalars['String'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type GetPhotoQueryVariables = Exact<{
  photoId: Scalars['uuid'];
}>;


export type GetPhotoQuery = (
  { __typename?: 'query_root' }
  & { photos_by_pk?: Maybe<(
    { __typename?: 'photos' }
    & Pick<Photos, 'id' | 'description' | 'created_at' | 'photo_url'>
    & { comments: Array<(
      { __typename?: 'comments' }
      & Pick<Comments, 'id' | 'comment' | 'created_at'>
      & { firebase_user_profile?: Maybe<(
        { __typename?: 'UserProfile' }
        & Pick<UserProfile, 'displayName'>
      )> }
    )> }
  )> }
);

export type InsertCommentMutationVariables = Exact<{
  comment: Scalars['String'];
  photoId: Scalars['uuid'];
}>;


export type InsertCommentMutation = (
  { __typename?: 'mutation_root' }
  & { insert_comments_one?: Maybe<(
    { __typename?: 'comments' }
    & Pick<Comments, 'id' | 'comment' | 'created_at'>
    & { firebase_user_profile?: Maybe<(
      { __typename?: 'UserProfile' }
      & Pick<UserProfile, 'displayName'>
    )> }
  )> }
);

export type GetUserPhotosQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetUserPhotosQuery = (
  { __typename?: 'query_root' }
  & { photos: Array<(
    { __typename?: 'photos' }
    & Pick<Photos, 'id' | 'photo_url' | 'created_at'>
    & { firebase_user_profile?: Maybe<(
      { __typename?: 'UserProfile' }
      & Pick<UserProfile, 'displayName'>
    )>, comments_aggregate: (
      { __typename?: 'comments_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'comments_aggregate_fields' }
        & Pick<Comments_Aggregate_Fields, 'count'>
      )> }
    ) }
  )> }
);

export type SignInMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignInMutation = (
  { __typename?: 'mutation_root' }
  & { login?: Maybe<(
    { __typename?: 'LoginObject' }
    & Pick<LoginObject, 'id' | 'accessToken'>
  )> }
);

export type SignUpMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  displayName: Scalars['String'];
}>;


export type SignUpMutation = (
  { __typename?: 'mutation_root' }
  & { create_user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'displayName' | 'email' | 'id'>
  )> }
);

export type UploadPhotoMutationVariables = Exact<{
  base64image: Scalars['String'];
}>;


export type UploadPhotoMutation = (
  { __typename?: 'mutation_root' }
  & { upload_photo?: Maybe<(
    { __typename?: 'UploadResult' }
    & Pick<UploadResult, 'url'>
  )> }
);

export type InsertPhotoMutationVariables = Exact<{
  photoUrl: Scalars['String'];
  description: Scalars['String'];
}>;


export type InsertPhotoMutation = (
  { __typename?: 'mutation_root' }
  & { insert_photos?: Maybe<(
    { __typename?: 'photos_mutation_response' }
    & Pick<Photos_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'photos' }
      & Pick<Photos, 'description' | 'photo_url' | 'created_at'>
    )> }
  )> }
);

export type GetProfileQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetProfileQuery = (
  { __typename?: 'query_root' }
  & { user_profile?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'displayName'>
  )> }
);


export const GetPhotoDocument = gql`
    query GetPhoto($photoId: uuid!) {
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

/**
 * __useGetPhotoQuery__
 *
 * To run a query within a React component, call `useGetPhotoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPhotoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPhotoQuery({
 *   variables: {
 *      photoId: // value for 'photoId'
 *   },
 * });
 */
export function useGetPhotoQuery(baseOptions: Apollo.QueryHookOptions<GetPhotoQuery, GetPhotoQueryVariables>) {
        return Apollo.useQuery<GetPhotoQuery, GetPhotoQueryVariables>(GetPhotoDocument, baseOptions);
      }
export function useGetPhotoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPhotoQuery, GetPhotoQueryVariables>) {
          return Apollo.useLazyQuery<GetPhotoQuery, GetPhotoQueryVariables>(GetPhotoDocument, baseOptions);
        }
export type GetPhotoQueryHookResult = ReturnType<typeof useGetPhotoQuery>;
export type GetPhotoLazyQueryHookResult = ReturnType<typeof useGetPhotoLazyQuery>;
export type GetPhotoQueryResult = Apollo.QueryResult<GetPhotoQuery, GetPhotoQueryVariables>;
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
export type InsertCommentMutationFn = Apollo.MutationFunction<InsertCommentMutation, InsertCommentMutationVariables>;

/**
 * __useInsertCommentMutation__
 *
 * To run a mutation, you first call `useInsertCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertCommentMutation, { data, loading, error }] = useInsertCommentMutation({
 *   variables: {
 *      comment: // value for 'comment'
 *      photoId: // value for 'photoId'
 *   },
 * });
 */
export function useInsertCommentMutation(baseOptions?: Apollo.MutationHookOptions<InsertCommentMutation, InsertCommentMutationVariables>) {
        return Apollo.useMutation<InsertCommentMutation, InsertCommentMutationVariables>(InsertCommentDocument, baseOptions);
      }
export type InsertCommentMutationHookResult = ReturnType<typeof useInsertCommentMutation>;
export type InsertCommentMutationResult = Apollo.MutationResult<InsertCommentMutation>;
export type InsertCommentMutationOptions = Apollo.BaseMutationOptions<InsertCommentMutation, InsertCommentMutationVariables>;
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

/**
 * __useGetUserPhotosQuery__
 *
 * To run a query within a React component, call `useGetUserPhotosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserPhotosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserPhotosQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserPhotosQuery(baseOptions: Apollo.QueryHookOptions<GetUserPhotosQuery, GetUserPhotosQueryVariables>) {
        return Apollo.useQuery<GetUserPhotosQuery, GetUserPhotosQueryVariables>(GetUserPhotosDocument, baseOptions);
      }
export function useGetUserPhotosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserPhotosQuery, GetUserPhotosQueryVariables>) {
          return Apollo.useLazyQuery<GetUserPhotosQuery, GetUserPhotosQueryVariables>(GetUserPhotosDocument, baseOptions);
        }
export type GetUserPhotosQueryHookResult = ReturnType<typeof useGetUserPhotosQuery>;
export type GetUserPhotosLazyQueryHookResult = ReturnType<typeof useGetUserPhotosLazyQuery>;
export type GetUserPhotosQueryResult = Apollo.QueryResult<GetUserPhotosQuery, GetUserPhotosQueryVariables>;
export const SignInDocument = gql`
    mutation SignIn($email: String!, $password: String!) {
  login(credentials: {email: $email, password: $password}) {
    id
    accessToken
  }
}
    `;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, baseOptions);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const SignUpDocument = gql`
    mutation SignUp($email: String!, $password: String!, $displayName: String!) {
  create_user(
    credentials: {email: $email, password: $password, displayName: $displayName}
  ) {
    displayName
    email
    id
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      displayName: // value for 'displayName'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, baseOptions);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const UploadPhotoDocument = gql`
    mutation UploadPhoto($base64image: String!) {
  upload_photo(base64image: $base64image) {
    url
  }
}
    `;
export type UploadPhotoMutationFn = Apollo.MutationFunction<UploadPhotoMutation, UploadPhotoMutationVariables>;

/**
 * __useUploadPhotoMutation__
 *
 * To run a mutation, you first call `useUploadPhotoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadPhotoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadPhotoMutation, { data, loading, error }] = useUploadPhotoMutation({
 *   variables: {
 *      base64image: // value for 'base64image'
 *   },
 * });
 */
export function useUploadPhotoMutation(baseOptions?: Apollo.MutationHookOptions<UploadPhotoMutation, UploadPhotoMutationVariables>) {
        return Apollo.useMutation<UploadPhotoMutation, UploadPhotoMutationVariables>(UploadPhotoDocument, baseOptions);
      }
export type UploadPhotoMutationHookResult = ReturnType<typeof useUploadPhotoMutation>;
export type UploadPhotoMutationResult = Apollo.MutationResult<UploadPhotoMutation>;
export type UploadPhotoMutationOptions = Apollo.BaseMutationOptions<UploadPhotoMutation, UploadPhotoMutationVariables>;
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
export type InsertPhotoMutationFn = Apollo.MutationFunction<InsertPhotoMutation, InsertPhotoMutationVariables>;

/**
 * __useInsertPhotoMutation__
 *
 * To run a mutation, you first call `useInsertPhotoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertPhotoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertPhotoMutation, { data, loading, error }] = useInsertPhotoMutation({
 *   variables: {
 *      photoUrl: // value for 'photoUrl'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useInsertPhotoMutation(baseOptions?: Apollo.MutationHookOptions<InsertPhotoMutation, InsertPhotoMutationVariables>) {
        return Apollo.useMutation<InsertPhotoMutation, InsertPhotoMutationVariables>(InsertPhotoDocument, baseOptions);
      }
export type InsertPhotoMutationHookResult = ReturnType<typeof useInsertPhotoMutation>;
export type InsertPhotoMutationResult = Apollo.MutationResult<InsertPhotoMutation>;
export type InsertPhotoMutationOptions = Apollo.BaseMutationOptions<InsertPhotoMutation, InsertPhotoMutationVariables>;
export const GetProfileDocument = gql`
    query GetProfile($id: String!) {
  user_profile(id: $id) {
    id
    email
    displayName
  }
}
    `;

/**
 * __useGetProfileQuery__
 *
 * To run a query within a React component, call `useGetProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProfileQuery(baseOptions: Apollo.QueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
        return Apollo.useQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, baseOptions);
      }
export function useGetProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
          return Apollo.useLazyQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, baseOptions);
        }
export type GetProfileQueryHookResult = ReturnType<typeof useGetProfileQuery>;
export type GetProfileLazyQueryHookResult = ReturnType<typeof useGetProfileLazyQuery>;
export type GetProfileQueryResult = Apollo.QueryResult<GetProfileQuery, GetProfileQueryVariables>;