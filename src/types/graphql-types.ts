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
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>;
  lossless?: Maybe<Scalars['Boolean']>;
  speed?: Maybe<Scalars['Int']>;
};

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
  /**
   * Force the output format for the low-res preview. Default is to use the same
   * format as the input. You should rarely need to change this
   */
  toFormat?: Maybe<ImageFormat>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  /** Returns all children nodes filtered by type TransparenciasYaml */
  childrenTransparenciasYaml?: Maybe<Array<Maybe<TransparenciasYaml>>>;
  /** Returns the first child node of type TransparenciasYaml or null if there are no children of given type on this node */
  childTransparenciasYaml?: Maybe<TransparenciasYaml>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenMarkdownRemark'
  | 'childrenMarkdownRemark___id'
  | 'childrenMarkdownRemark___frontmatter___title'
  | 'childrenMarkdownRemark___frontmatter___datePublished'
  | 'childrenMarkdownRemark___frontmatter___image___author'
  | 'childrenMarkdownRemark___frontmatter___image___description'
  | 'childrenMarkdownRemark___frontmatter___image___isBasedOn'
  | 'childrenMarkdownRemark___frontmatter___tags'
  | 'childrenMarkdownRemark___frontmatter___description'
  | 'childrenMarkdownRemark___frontmatter___dateModified'
  | 'childrenMarkdownRemark___excerpt'
  | 'childrenMarkdownRemark___rawMarkdownBody'
  | 'childrenMarkdownRemark___fileAbsolutePath'
  | 'childrenMarkdownRemark___fields___slug'
  | 'childrenMarkdownRemark___html'
  | 'childrenMarkdownRemark___htmlAst'
  | 'childrenMarkdownRemark___excerptAst'
  | 'childrenMarkdownRemark___headings'
  | 'childrenMarkdownRemark___headings___id'
  | 'childrenMarkdownRemark___headings___value'
  | 'childrenMarkdownRemark___headings___depth'
  | 'childrenMarkdownRemark___timeToRead'
  | 'childrenMarkdownRemark___tableOfContents'
  | 'childrenMarkdownRemark___wordCount___paragraphs'
  | 'childrenMarkdownRemark___wordCount___sentences'
  | 'childrenMarkdownRemark___wordCount___words'
  | 'childrenMarkdownRemark___parent___id'
  | 'childrenMarkdownRemark___parent___parent___id'
  | 'childrenMarkdownRemark___parent___parent___children'
  | 'childrenMarkdownRemark___parent___children'
  | 'childrenMarkdownRemark___parent___children___id'
  | 'childrenMarkdownRemark___parent___children___children'
  | 'childrenMarkdownRemark___parent___internal___content'
  | 'childrenMarkdownRemark___parent___internal___contentDigest'
  | 'childrenMarkdownRemark___parent___internal___description'
  | 'childrenMarkdownRemark___parent___internal___fieldOwners'
  | 'childrenMarkdownRemark___parent___internal___ignoreType'
  | 'childrenMarkdownRemark___parent___internal___mediaType'
  | 'childrenMarkdownRemark___parent___internal___owner'
  | 'childrenMarkdownRemark___parent___internal___type'
  | 'childrenMarkdownRemark___children'
  | 'childrenMarkdownRemark___children___id'
  | 'childrenMarkdownRemark___children___parent___id'
  | 'childrenMarkdownRemark___children___parent___children'
  | 'childrenMarkdownRemark___children___children'
  | 'childrenMarkdownRemark___children___children___id'
  | 'childrenMarkdownRemark___children___children___children'
  | 'childrenMarkdownRemark___children___internal___content'
  | 'childrenMarkdownRemark___children___internal___contentDigest'
  | 'childrenMarkdownRemark___children___internal___description'
  | 'childrenMarkdownRemark___children___internal___fieldOwners'
  | 'childrenMarkdownRemark___children___internal___ignoreType'
  | 'childrenMarkdownRemark___children___internal___mediaType'
  | 'childrenMarkdownRemark___children___internal___owner'
  | 'childrenMarkdownRemark___children___internal___type'
  | 'childrenMarkdownRemark___internal___content'
  | 'childrenMarkdownRemark___internal___contentDigest'
  | 'childrenMarkdownRemark___internal___description'
  | 'childrenMarkdownRemark___internal___fieldOwners'
  | 'childrenMarkdownRemark___internal___ignoreType'
  | 'childrenMarkdownRemark___internal___mediaType'
  | 'childrenMarkdownRemark___internal___owner'
  | 'childrenMarkdownRemark___internal___type'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___frontmatter___datePublished'
  | 'childMarkdownRemark___frontmatter___image___author'
  | 'childMarkdownRemark___frontmatter___image___description'
  | 'childMarkdownRemark___frontmatter___image___isBasedOn'
  | 'childMarkdownRemark___frontmatter___tags'
  | 'childMarkdownRemark___frontmatter___description'
  | 'childMarkdownRemark___frontmatter___dateModified'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___fileAbsolutePath'
  | 'childMarkdownRemark___fields___slug'
  | 'childMarkdownRemark___html'
  | 'childMarkdownRemark___htmlAst'
  | 'childMarkdownRemark___excerptAst'
  | 'childMarkdownRemark___headings'
  | 'childMarkdownRemark___headings___id'
  | 'childMarkdownRemark___headings___value'
  | 'childMarkdownRemark___headings___depth'
  | 'childMarkdownRemark___timeToRead'
  | 'childMarkdownRemark___tableOfContents'
  | 'childMarkdownRemark___wordCount___paragraphs'
  | 'childMarkdownRemark___wordCount___sentences'
  | 'childMarkdownRemark___wordCount___words'
  | 'childMarkdownRemark___parent___id'
  | 'childMarkdownRemark___parent___parent___id'
  | 'childMarkdownRemark___parent___parent___children'
  | 'childMarkdownRemark___parent___children'
  | 'childMarkdownRemark___parent___children___id'
  | 'childMarkdownRemark___parent___children___children'
  | 'childMarkdownRemark___parent___internal___content'
  | 'childMarkdownRemark___parent___internal___contentDigest'
  | 'childMarkdownRemark___parent___internal___description'
  | 'childMarkdownRemark___parent___internal___fieldOwners'
  | 'childMarkdownRemark___parent___internal___ignoreType'
  | 'childMarkdownRemark___parent___internal___mediaType'
  | 'childMarkdownRemark___parent___internal___owner'
  | 'childMarkdownRemark___parent___internal___type'
  | 'childMarkdownRemark___children'
  | 'childMarkdownRemark___children___id'
  | 'childMarkdownRemark___children___parent___id'
  | 'childMarkdownRemark___children___parent___children'
  | 'childMarkdownRemark___children___children'
  | 'childMarkdownRemark___children___children___id'
  | 'childMarkdownRemark___children___children___children'
  | 'childMarkdownRemark___children___internal___content'
  | 'childMarkdownRemark___children___internal___contentDigest'
  | 'childMarkdownRemark___children___internal___description'
  | 'childMarkdownRemark___children___internal___fieldOwners'
  | 'childMarkdownRemark___children___internal___ignoreType'
  | 'childMarkdownRemark___children___internal___mediaType'
  | 'childMarkdownRemark___children___internal___owner'
  | 'childMarkdownRemark___children___internal___type'
  | 'childMarkdownRemark___internal___content'
  | 'childMarkdownRemark___internal___contentDigest'
  | 'childMarkdownRemark___internal___description'
  | 'childMarkdownRemark___internal___fieldOwners'
  | 'childMarkdownRemark___internal___ignoreType'
  | 'childMarkdownRemark___internal___mediaType'
  | 'childMarkdownRemark___internal___owner'
  | 'childMarkdownRemark___internal___type'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___resolutions___base64'
  | 'childrenImageSharp___resolutions___tracedSVG'
  | 'childrenImageSharp___resolutions___aspectRatio'
  | 'childrenImageSharp___resolutions___width'
  | 'childrenImageSharp___resolutions___height'
  | 'childrenImageSharp___resolutions___src'
  | 'childrenImageSharp___resolutions___srcSet'
  | 'childrenImageSharp___resolutions___srcWebp'
  | 'childrenImageSharp___resolutions___srcSetWebp'
  | 'childrenImageSharp___resolutions___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___sizes___base64'
  | 'childrenImageSharp___sizes___tracedSVG'
  | 'childrenImageSharp___sizes___aspectRatio'
  | 'childrenImageSharp___sizes___src'
  | 'childrenImageSharp___sizes___srcSet'
  | 'childrenImageSharp___sizes___srcWebp'
  | 'childrenImageSharp___sizes___srcSetWebp'
  | 'childrenImageSharp___sizes___sizes'
  | 'childrenImageSharp___sizes___originalImg'
  | 'childrenImageSharp___sizes___originalName'
  | 'childrenImageSharp___sizes___presentationWidth'
  | 'childrenImageSharp___sizes___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___resolutions___base64'
  | 'childImageSharp___resolutions___tracedSVG'
  | 'childImageSharp___resolutions___aspectRatio'
  | 'childImageSharp___resolutions___width'
  | 'childImageSharp___resolutions___height'
  | 'childImageSharp___resolutions___src'
  | 'childImageSharp___resolutions___srcSet'
  | 'childImageSharp___resolutions___srcWebp'
  | 'childImageSharp___resolutions___srcSetWebp'
  | 'childImageSharp___resolutions___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___sizes___base64'
  | 'childImageSharp___sizes___tracedSVG'
  | 'childImageSharp___sizes___aspectRatio'
  | 'childImageSharp___sizes___src'
  | 'childImageSharp___sizes___srcSet'
  | 'childImageSharp___sizes___srcWebp'
  | 'childImageSharp___sizes___srcSetWebp'
  | 'childImageSharp___sizes___sizes'
  | 'childImageSharp___sizes___originalImg'
  | 'childImageSharp___sizes___originalName'
  | 'childImageSharp___sizes___presentationWidth'
  | 'childImageSharp___sizes___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'childrenTransparenciasYaml'
  | 'childrenTransparenciasYaml___id'
  | 'childrenTransparenciasYaml___parent___id'
  | 'childrenTransparenciasYaml___parent___parent___id'
  | 'childrenTransparenciasYaml___parent___parent___children'
  | 'childrenTransparenciasYaml___parent___children'
  | 'childrenTransparenciasYaml___parent___children___id'
  | 'childrenTransparenciasYaml___parent___children___children'
  | 'childrenTransparenciasYaml___parent___internal___content'
  | 'childrenTransparenciasYaml___parent___internal___contentDigest'
  | 'childrenTransparenciasYaml___parent___internal___description'
  | 'childrenTransparenciasYaml___parent___internal___fieldOwners'
  | 'childrenTransparenciasYaml___parent___internal___ignoreType'
  | 'childrenTransparenciasYaml___parent___internal___mediaType'
  | 'childrenTransparenciasYaml___parent___internal___owner'
  | 'childrenTransparenciasYaml___parent___internal___type'
  | 'childrenTransparenciasYaml___children'
  | 'childrenTransparenciasYaml___children___id'
  | 'childrenTransparenciasYaml___children___parent___id'
  | 'childrenTransparenciasYaml___children___parent___children'
  | 'childrenTransparenciasYaml___children___children'
  | 'childrenTransparenciasYaml___children___children___id'
  | 'childrenTransparenciasYaml___children___children___children'
  | 'childrenTransparenciasYaml___children___internal___content'
  | 'childrenTransparenciasYaml___children___internal___contentDigest'
  | 'childrenTransparenciasYaml___children___internal___description'
  | 'childrenTransparenciasYaml___children___internal___fieldOwners'
  | 'childrenTransparenciasYaml___children___internal___ignoreType'
  | 'childrenTransparenciasYaml___children___internal___mediaType'
  | 'childrenTransparenciasYaml___children___internal___owner'
  | 'childrenTransparenciasYaml___children___internal___type'
  | 'childrenTransparenciasYaml___internal___content'
  | 'childrenTransparenciasYaml___internal___contentDigest'
  | 'childrenTransparenciasYaml___internal___description'
  | 'childrenTransparenciasYaml___internal___fieldOwners'
  | 'childrenTransparenciasYaml___internal___ignoreType'
  | 'childrenTransparenciasYaml___internal___mediaType'
  | 'childrenTransparenciasYaml___internal___owner'
  | 'childrenTransparenciasYaml___internal___type'
  | 'childrenTransparenciasYaml___title'
  | 'childrenTransparenciasYaml___contentUrl___sourceInstanceName'
  | 'childrenTransparenciasYaml___contentUrl___absolutePath'
  | 'childrenTransparenciasYaml___contentUrl___relativePath'
  | 'childrenTransparenciasYaml___contentUrl___extension'
  | 'childrenTransparenciasYaml___contentUrl___size'
  | 'childrenTransparenciasYaml___contentUrl___prettySize'
  | 'childrenTransparenciasYaml___contentUrl___modifiedTime'
  | 'childrenTransparenciasYaml___contentUrl___accessTime'
  | 'childrenTransparenciasYaml___contentUrl___changeTime'
  | 'childrenTransparenciasYaml___contentUrl___birthTime'
  | 'childrenTransparenciasYaml___contentUrl___root'
  | 'childrenTransparenciasYaml___contentUrl___dir'
  | 'childrenTransparenciasYaml___contentUrl___base'
  | 'childrenTransparenciasYaml___contentUrl___ext'
  | 'childrenTransparenciasYaml___contentUrl___name'
  | 'childrenTransparenciasYaml___contentUrl___relativeDirectory'
  | 'childrenTransparenciasYaml___contentUrl___dev'
  | 'childrenTransparenciasYaml___contentUrl___mode'
  | 'childrenTransparenciasYaml___contentUrl___nlink'
  | 'childrenTransparenciasYaml___contentUrl___uid'
  | 'childrenTransparenciasYaml___contentUrl___gid'
  | 'childrenTransparenciasYaml___contentUrl___rdev'
  | 'childrenTransparenciasYaml___contentUrl___ino'
  | 'childrenTransparenciasYaml___contentUrl___atimeMs'
  | 'childrenTransparenciasYaml___contentUrl___mtimeMs'
  | 'childrenTransparenciasYaml___contentUrl___ctimeMs'
  | 'childrenTransparenciasYaml___contentUrl___atime'
  | 'childrenTransparenciasYaml___contentUrl___mtime'
  | 'childrenTransparenciasYaml___contentUrl___ctime'
  | 'childrenTransparenciasYaml___contentUrl___birthtime'
  | 'childrenTransparenciasYaml___contentUrl___birthtimeMs'
  | 'childrenTransparenciasYaml___contentUrl___blksize'
  | 'childrenTransparenciasYaml___contentUrl___blocks'
  | 'childrenTransparenciasYaml___contentUrl___publicURL'
  | 'childrenTransparenciasYaml___contentUrl___childrenMarkdownRemark'
  | 'childrenTransparenciasYaml___contentUrl___childrenMarkdownRemark___id'
  | 'childrenTransparenciasYaml___contentUrl___childrenMarkdownRemark___excerpt'
  | 'childrenTransparenciasYaml___contentUrl___childrenMarkdownRemark___rawMarkdownBody'
  | 'childrenTransparenciasYaml___contentUrl___childrenMarkdownRemark___fileAbsolutePath'
  | 'childrenTransparenciasYaml___contentUrl___childrenMarkdownRemark___html'
  | 'childrenTransparenciasYaml___contentUrl___childrenMarkdownRemark___htmlAst'
  | 'childrenTransparenciasYaml___contentUrl___childrenMarkdownRemark___excerptAst'
  | 'childrenTransparenciasYaml___contentUrl___childrenMarkdownRemark___headings'
  | 'childrenTransparenciasYaml___contentUrl___childrenMarkdownRemark___timeToRead'
  | 'childrenTransparenciasYaml___contentUrl___childrenMarkdownRemark___tableOfContents'
  | 'childrenTransparenciasYaml___contentUrl___childrenMarkdownRemark___children'
  | 'childrenTransparenciasYaml___contentUrl___childMarkdownRemark___id'
  | 'childrenTransparenciasYaml___contentUrl___childMarkdownRemark___excerpt'
  | 'childrenTransparenciasYaml___contentUrl___childMarkdownRemark___rawMarkdownBody'
  | 'childrenTransparenciasYaml___contentUrl___childMarkdownRemark___fileAbsolutePath'
  | 'childrenTransparenciasYaml___contentUrl___childMarkdownRemark___html'
  | 'childrenTransparenciasYaml___contentUrl___childMarkdownRemark___htmlAst'
  | 'childrenTransparenciasYaml___contentUrl___childMarkdownRemark___excerptAst'
  | 'childrenTransparenciasYaml___contentUrl___childMarkdownRemark___headings'
  | 'childrenTransparenciasYaml___contentUrl___childMarkdownRemark___timeToRead'
  | 'childrenTransparenciasYaml___contentUrl___childMarkdownRemark___tableOfContents'
  | 'childrenTransparenciasYaml___contentUrl___childMarkdownRemark___children'
  | 'childrenTransparenciasYaml___contentUrl___childrenImageSharp'
  | 'childrenTransparenciasYaml___contentUrl___childrenImageSharp___gatsbyImageData'
  | 'childrenTransparenciasYaml___contentUrl___childrenImageSharp___id'
  | 'childrenTransparenciasYaml___contentUrl___childrenImageSharp___children'
  | 'childrenTransparenciasYaml___contentUrl___childImageSharp___gatsbyImageData'
  | 'childrenTransparenciasYaml___contentUrl___childImageSharp___id'
  | 'childrenTransparenciasYaml___contentUrl___childImageSharp___children'
  | 'childrenTransparenciasYaml___contentUrl___childrenTransparenciasYaml'
  | 'childrenTransparenciasYaml___contentUrl___childrenTransparenciasYaml___id'
  | 'childrenTransparenciasYaml___contentUrl___childrenTransparenciasYaml___children'
  | 'childrenTransparenciasYaml___contentUrl___childrenTransparenciasYaml___title'
  | 'childrenTransparenciasYaml___contentUrl___childrenTransparenciasYaml___datePublished'
  | 'childrenTransparenciasYaml___contentUrl___childrenTransparenciasYaml___description'
  | 'childrenTransparenciasYaml___contentUrl___childrenTransparenciasYaml___slug'
  | 'childrenTransparenciasYaml___contentUrl___childrenTransparenciasYaml___type'
  | 'childrenTransparenciasYaml___contentUrl___childrenTransparenciasYaml___url'
  | 'childrenTransparenciasYaml___contentUrl___childTransparenciasYaml___id'
  | 'childrenTransparenciasYaml___contentUrl___childTransparenciasYaml___children'
  | 'childrenTransparenciasYaml___contentUrl___childTransparenciasYaml___title'
  | 'childrenTransparenciasYaml___contentUrl___childTransparenciasYaml___datePublished'
  | 'childrenTransparenciasYaml___contentUrl___childTransparenciasYaml___description'
  | 'childrenTransparenciasYaml___contentUrl___childTransparenciasYaml___slug'
  | 'childrenTransparenciasYaml___contentUrl___childTransparenciasYaml___type'
  | 'childrenTransparenciasYaml___contentUrl___childTransparenciasYaml___url'
  | 'childrenTransparenciasYaml___contentUrl___id'
  | 'childrenTransparenciasYaml___contentUrl___parent___id'
  | 'childrenTransparenciasYaml___contentUrl___parent___children'
  | 'childrenTransparenciasYaml___contentUrl___children'
  | 'childrenTransparenciasYaml___contentUrl___children___id'
  | 'childrenTransparenciasYaml___contentUrl___children___children'
  | 'childrenTransparenciasYaml___contentUrl___internal___content'
  | 'childrenTransparenciasYaml___contentUrl___internal___contentDigest'
  | 'childrenTransparenciasYaml___contentUrl___internal___description'
  | 'childrenTransparenciasYaml___contentUrl___internal___fieldOwners'
  | 'childrenTransparenciasYaml___contentUrl___internal___ignoreType'
  | 'childrenTransparenciasYaml___contentUrl___internal___mediaType'
  | 'childrenTransparenciasYaml___contentUrl___internal___owner'
  | 'childrenTransparenciasYaml___contentUrl___internal___type'
  | 'childrenTransparenciasYaml___datePublished'
  | 'childrenTransparenciasYaml___description'
  | 'childrenTransparenciasYaml___slug'
  | 'childrenTransparenciasYaml___type'
  | 'childrenTransparenciasYaml___url'
  | 'childrenTransparenciasYaml___fields___slug'
  | 'childTransparenciasYaml___id'
  | 'childTransparenciasYaml___parent___id'
  | 'childTransparenciasYaml___parent___parent___id'
  | 'childTransparenciasYaml___parent___parent___children'
  | 'childTransparenciasYaml___parent___children'
  | 'childTransparenciasYaml___parent___children___id'
  | 'childTransparenciasYaml___parent___children___children'
  | 'childTransparenciasYaml___parent___internal___content'
  | 'childTransparenciasYaml___parent___internal___contentDigest'
  | 'childTransparenciasYaml___parent___internal___description'
  | 'childTransparenciasYaml___parent___internal___fieldOwners'
  | 'childTransparenciasYaml___parent___internal___ignoreType'
  | 'childTransparenciasYaml___parent___internal___mediaType'
  | 'childTransparenciasYaml___parent___internal___owner'
  | 'childTransparenciasYaml___parent___internal___type'
  | 'childTransparenciasYaml___children'
  | 'childTransparenciasYaml___children___id'
  | 'childTransparenciasYaml___children___parent___id'
  | 'childTransparenciasYaml___children___parent___children'
  | 'childTransparenciasYaml___children___children'
  | 'childTransparenciasYaml___children___children___id'
  | 'childTransparenciasYaml___children___children___children'
  | 'childTransparenciasYaml___children___internal___content'
  | 'childTransparenciasYaml___children___internal___contentDigest'
  | 'childTransparenciasYaml___children___internal___description'
  | 'childTransparenciasYaml___children___internal___fieldOwners'
  | 'childTransparenciasYaml___children___internal___ignoreType'
  | 'childTransparenciasYaml___children___internal___mediaType'
  | 'childTransparenciasYaml___children___internal___owner'
  | 'childTransparenciasYaml___children___internal___type'
  | 'childTransparenciasYaml___internal___content'
  | 'childTransparenciasYaml___internal___contentDigest'
  | 'childTransparenciasYaml___internal___description'
  | 'childTransparenciasYaml___internal___fieldOwners'
  | 'childTransparenciasYaml___internal___ignoreType'
  | 'childTransparenciasYaml___internal___mediaType'
  | 'childTransparenciasYaml___internal___owner'
  | 'childTransparenciasYaml___internal___type'
  | 'childTransparenciasYaml___title'
  | 'childTransparenciasYaml___contentUrl___sourceInstanceName'
  | 'childTransparenciasYaml___contentUrl___absolutePath'
  | 'childTransparenciasYaml___contentUrl___relativePath'
  | 'childTransparenciasYaml___contentUrl___extension'
  | 'childTransparenciasYaml___contentUrl___size'
  | 'childTransparenciasYaml___contentUrl___prettySize'
  | 'childTransparenciasYaml___contentUrl___modifiedTime'
  | 'childTransparenciasYaml___contentUrl___accessTime'
  | 'childTransparenciasYaml___contentUrl___changeTime'
  | 'childTransparenciasYaml___contentUrl___birthTime'
  | 'childTransparenciasYaml___contentUrl___root'
  | 'childTransparenciasYaml___contentUrl___dir'
  | 'childTransparenciasYaml___contentUrl___base'
  | 'childTransparenciasYaml___contentUrl___ext'
  | 'childTransparenciasYaml___contentUrl___name'
  | 'childTransparenciasYaml___contentUrl___relativeDirectory'
  | 'childTransparenciasYaml___contentUrl___dev'
  | 'childTransparenciasYaml___contentUrl___mode'
  | 'childTransparenciasYaml___contentUrl___nlink'
  | 'childTransparenciasYaml___contentUrl___uid'
  | 'childTransparenciasYaml___contentUrl___gid'
  | 'childTransparenciasYaml___contentUrl___rdev'
  | 'childTransparenciasYaml___contentUrl___ino'
  | 'childTransparenciasYaml___contentUrl___atimeMs'
  | 'childTransparenciasYaml___contentUrl___mtimeMs'
  | 'childTransparenciasYaml___contentUrl___ctimeMs'
  | 'childTransparenciasYaml___contentUrl___atime'
  | 'childTransparenciasYaml___contentUrl___mtime'
  | 'childTransparenciasYaml___contentUrl___ctime'
  | 'childTransparenciasYaml___contentUrl___birthtime'
  | 'childTransparenciasYaml___contentUrl___birthtimeMs'
  | 'childTransparenciasYaml___contentUrl___blksize'
  | 'childTransparenciasYaml___contentUrl___blocks'
  | 'childTransparenciasYaml___contentUrl___publicURL'
  | 'childTransparenciasYaml___contentUrl___childrenMarkdownRemark'
  | 'childTransparenciasYaml___contentUrl___childrenMarkdownRemark___id'
  | 'childTransparenciasYaml___contentUrl___childrenMarkdownRemark___excerpt'
  | 'childTransparenciasYaml___contentUrl___childrenMarkdownRemark___rawMarkdownBody'
  | 'childTransparenciasYaml___contentUrl___childrenMarkdownRemark___fileAbsolutePath'
  | 'childTransparenciasYaml___contentUrl___childrenMarkdownRemark___html'
  | 'childTransparenciasYaml___contentUrl___childrenMarkdownRemark___htmlAst'
  | 'childTransparenciasYaml___contentUrl___childrenMarkdownRemark___excerptAst'
  | 'childTransparenciasYaml___contentUrl___childrenMarkdownRemark___headings'
  | 'childTransparenciasYaml___contentUrl___childrenMarkdownRemark___timeToRead'
  | 'childTransparenciasYaml___contentUrl___childrenMarkdownRemark___tableOfContents'
  | 'childTransparenciasYaml___contentUrl___childrenMarkdownRemark___children'
  | 'childTransparenciasYaml___contentUrl___childMarkdownRemark___id'
  | 'childTransparenciasYaml___contentUrl___childMarkdownRemark___excerpt'
  | 'childTransparenciasYaml___contentUrl___childMarkdownRemark___rawMarkdownBody'
  | 'childTransparenciasYaml___contentUrl___childMarkdownRemark___fileAbsolutePath'
  | 'childTransparenciasYaml___contentUrl___childMarkdownRemark___html'
  | 'childTransparenciasYaml___contentUrl___childMarkdownRemark___htmlAst'
  | 'childTransparenciasYaml___contentUrl___childMarkdownRemark___excerptAst'
  | 'childTransparenciasYaml___contentUrl___childMarkdownRemark___headings'
  | 'childTransparenciasYaml___contentUrl___childMarkdownRemark___timeToRead'
  | 'childTransparenciasYaml___contentUrl___childMarkdownRemark___tableOfContents'
  | 'childTransparenciasYaml___contentUrl___childMarkdownRemark___children'
  | 'childTransparenciasYaml___contentUrl___childrenImageSharp'
  | 'childTransparenciasYaml___contentUrl___childrenImageSharp___gatsbyImageData'
  | 'childTransparenciasYaml___contentUrl___childrenImageSharp___id'
  | 'childTransparenciasYaml___contentUrl___childrenImageSharp___children'
  | 'childTransparenciasYaml___contentUrl___childImageSharp___gatsbyImageData'
  | 'childTransparenciasYaml___contentUrl___childImageSharp___id'
  | 'childTransparenciasYaml___contentUrl___childImageSharp___children'
  | 'childTransparenciasYaml___contentUrl___childrenTransparenciasYaml'
  | 'childTransparenciasYaml___contentUrl___childrenTransparenciasYaml___id'
  | 'childTransparenciasYaml___contentUrl___childrenTransparenciasYaml___children'
  | 'childTransparenciasYaml___contentUrl___childrenTransparenciasYaml___title'
  | 'childTransparenciasYaml___contentUrl___childrenTransparenciasYaml___datePublished'
  | 'childTransparenciasYaml___contentUrl___childrenTransparenciasYaml___description'
  | 'childTransparenciasYaml___contentUrl___childrenTransparenciasYaml___slug'
  | 'childTransparenciasYaml___contentUrl___childrenTransparenciasYaml___type'
  | 'childTransparenciasYaml___contentUrl___childrenTransparenciasYaml___url'
  | 'childTransparenciasYaml___contentUrl___childTransparenciasYaml___id'
  | 'childTransparenciasYaml___contentUrl___childTransparenciasYaml___children'
  | 'childTransparenciasYaml___contentUrl___childTransparenciasYaml___title'
  | 'childTransparenciasYaml___contentUrl___childTransparenciasYaml___datePublished'
  | 'childTransparenciasYaml___contentUrl___childTransparenciasYaml___description'
  | 'childTransparenciasYaml___contentUrl___childTransparenciasYaml___slug'
  | 'childTransparenciasYaml___contentUrl___childTransparenciasYaml___type'
  | 'childTransparenciasYaml___contentUrl___childTransparenciasYaml___url'
  | 'childTransparenciasYaml___contentUrl___id'
  | 'childTransparenciasYaml___contentUrl___parent___id'
  | 'childTransparenciasYaml___contentUrl___parent___children'
  | 'childTransparenciasYaml___contentUrl___children'
  | 'childTransparenciasYaml___contentUrl___children___id'
  | 'childTransparenciasYaml___contentUrl___children___children'
  | 'childTransparenciasYaml___contentUrl___internal___content'
  | 'childTransparenciasYaml___contentUrl___internal___contentDigest'
  | 'childTransparenciasYaml___contentUrl___internal___description'
  | 'childTransparenciasYaml___contentUrl___internal___fieldOwners'
  | 'childTransparenciasYaml___contentUrl___internal___ignoreType'
  | 'childTransparenciasYaml___contentUrl___internal___mediaType'
  | 'childTransparenciasYaml___contentUrl___internal___owner'
  | 'childTransparenciasYaml___contentUrl___internal___type'
  | 'childTransparenciasYaml___datePublished'
  | 'childTransparenciasYaml___description'
  | 'childTransparenciasYaml___slug'
  | 'childTransparenciasYaml___type'
  | 'childTransparenciasYaml___url'
  | 'childTransparenciasYaml___fields___slug'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenTransparenciasYaml?: Maybe<TransparenciasYamlFilterListInput>;
  childTransparenciasYaml?: Maybe<TransparenciasYamlFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  avifOptions?: Maybe<AvifOptions>;
  transformOptions?: Maybe<TransformOptions>;
  backgroundColor?: Maybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'resolutions___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'sizes___originalImg'
  | 'sizes___originalName'
  | 'sizes___presentationWidth'
  | 'sizes___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type MarkdownExcerptFormats =
  | 'PLAIN'
  | 'HTML'
  | 'MARKDOWN';

export type MarkdownHeading = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export type MarkdownHeadingLevels =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type MarkdownRemark = Node & {
  id: Scalars['ID'];
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  excerpt?: Maybe<Scalars['String']>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  fileAbsolutePath?: Maybe<Scalars['String']>;
  fields?: Maybe<MarkdownRemarkFields>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead?: Maybe<Scalars['Int']>;
  tableOfContents?: Maybe<Scalars['String']>;
  wordCount?: Maybe<MarkdownWordCount>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MarkdownRemarkGroupConnection>;
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFields = {
  slug?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFieldsEnum =
  | 'id'
  | 'frontmatter___title'
  | 'frontmatter___datePublished'
  | 'frontmatter___image___author'
  | 'frontmatter___image___contentUrl___sourceInstanceName'
  | 'frontmatter___image___contentUrl___absolutePath'
  | 'frontmatter___image___contentUrl___relativePath'
  | 'frontmatter___image___contentUrl___extension'
  | 'frontmatter___image___contentUrl___size'
  | 'frontmatter___image___contentUrl___prettySize'
  | 'frontmatter___image___contentUrl___modifiedTime'
  | 'frontmatter___image___contentUrl___accessTime'
  | 'frontmatter___image___contentUrl___changeTime'
  | 'frontmatter___image___contentUrl___birthTime'
  | 'frontmatter___image___contentUrl___root'
  | 'frontmatter___image___contentUrl___dir'
  | 'frontmatter___image___contentUrl___base'
  | 'frontmatter___image___contentUrl___ext'
  | 'frontmatter___image___contentUrl___name'
  | 'frontmatter___image___contentUrl___relativeDirectory'
  | 'frontmatter___image___contentUrl___dev'
  | 'frontmatter___image___contentUrl___mode'
  | 'frontmatter___image___contentUrl___nlink'
  | 'frontmatter___image___contentUrl___uid'
  | 'frontmatter___image___contentUrl___gid'
  | 'frontmatter___image___contentUrl___rdev'
  | 'frontmatter___image___contentUrl___ino'
  | 'frontmatter___image___contentUrl___atimeMs'
  | 'frontmatter___image___contentUrl___mtimeMs'
  | 'frontmatter___image___contentUrl___ctimeMs'
  | 'frontmatter___image___contentUrl___atime'
  | 'frontmatter___image___contentUrl___mtime'
  | 'frontmatter___image___contentUrl___ctime'
  | 'frontmatter___image___contentUrl___birthtime'
  | 'frontmatter___image___contentUrl___birthtimeMs'
  | 'frontmatter___image___contentUrl___blksize'
  | 'frontmatter___image___contentUrl___blocks'
  | 'frontmatter___image___contentUrl___publicURL'
  | 'frontmatter___image___contentUrl___childrenMarkdownRemark'
  | 'frontmatter___image___contentUrl___childrenImageSharp'
  | 'frontmatter___image___contentUrl___childrenTransparenciasYaml'
  | 'frontmatter___image___contentUrl___id'
  | 'frontmatter___image___contentUrl___children'
  | 'frontmatter___image___description'
  | 'frontmatter___image___isBasedOn'
  | 'frontmatter___tags'
  | 'frontmatter___description'
  | 'frontmatter___dateModified'
  | 'excerpt'
  | 'rawMarkdownBody'
  | 'fileAbsolutePath'
  | 'fields___slug'
  | 'html'
  | 'htmlAst'
  | 'excerptAst'
  | 'headings'
  | 'headings___id'
  | 'headings___value'
  | 'headings___depth'
  | 'timeToRead'
  | 'tableOfContents'
  | 'wordCount___paragraphs'
  | 'wordCount___sentences'
  | 'wordCount___words'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type MarkdownRemarkFieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkFilterListInput = {
  elemMatch?: Maybe<MarkdownRemarkFilterInput>;
};

export type MarkdownRemarkFrontmatter = {
  title?: Maybe<Scalars['String']>;
  datePublished?: Maybe<Scalars['Date']>;
  image?: Maybe<MarkdownRemarkFrontmatterImage>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  dateModified?: Maybe<Scalars['Date']>;
};


export type MarkdownRemarkFrontmatterDatePublishedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type MarkdownRemarkFrontmatterDateModifiedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  datePublished?: Maybe<DateQueryOperatorInput>;
  image?: Maybe<MarkdownRemarkFrontmatterImageFilterInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  dateModified?: Maybe<DateQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterImage = {
  author?: Maybe<Scalars['String']>;
  contentUrl?: Maybe<File>;
  description?: Maybe<Scalars['String']>;
  isBasedOn?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterImageFilterInput = {
  author?: Maybe<StringQueryOperatorInput>;
  contentUrl?: Maybe<FileFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  isBasedOn?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  transparenciasYaml?: Maybe<TransparenciasYaml>;
  allTransparenciasYaml: TransparenciasYamlConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenTransparenciasYaml?: Maybe<TransparenciasYamlFilterListInput>;
  childTransparenciasYaml?: Maybe<TransparenciasYamlFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>;
  sort?: Maybe<MarkdownRemarkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryTransparenciasYamlArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  contentUrl?: Maybe<FileFilterInput>;
  datePublished?: Maybe<DateQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<TransparenciasYamlFieldsFilterInput>;
};


export type QueryAllTransparenciasYamlArgs = {
  filter?: Maybe<TransparenciasYamlFilterInput>;
  sort?: Maybe<TransparenciasYamlSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___siteUrl'
  | 'siteMetadata___image'
  | 'siteMetadata___social___twitter'
  | 'siteMetadata___author___name'
  | 'siteMetadata___organization___name'
  | 'siteMetadata___organization___url'
  | 'siteMetadata___organization___logo'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  slug?: Maybe<Scalars['String']>;
  previous?: Maybe<SitePageContextPrevious>;
  next?: Maybe<SitePageContextNext>;
  tag?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  previous?: Maybe<SitePageContextPreviousFilterInput>;
  next?: Maybe<SitePageContextNextFilterInput>;
  tag?: Maybe<StringQueryOperatorInput>;
  posts?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextNext = {
  fields?: Maybe<SitePageContextNextFields>;
  frontmatter?: Maybe<SitePageContextNextFrontmatter>;
};

export type SitePageContextNextFields = {
  slug?: Maybe<Scalars['String']>;
};

export type SitePageContextNextFieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextNextFilterInput = {
  fields?: Maybe<SitePageContextNextFieldsFilterInput>;
  frontmatter?: Maybe<SitePageContextNextFrontmatterFilterInput>;
};

export type SitePageContextNextFrontmatter = {
  title?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageContextNextFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPrevious = {
  fields?: Maybe<SitePageContextPreviousFields>;
  frontmatter?: Maybe<SitePageContextPreviousFrontmatter>;
};

export type SitePageContextPreviousFields = {
  slug?: Maybe<Scalars['String']>;
};

export type SitePageContextPreviousFieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPreviousFilterInput = {
  fields?: Maybe<SitePageContextPreviousFieldsFilterInput>;
  frontmatter?: Maybe<SitePageContextPreviousFrontmatterFilterInput>;
};

export type SitePageContextPreviousFrontmatter = {
  title?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageContextPreviousFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'context___slug'
  | 'context___previous___fields___slug'
  | 'context___previous___frontmatter___title'
  | 'context___previous___frontmatter___tags'
  | 'context___next___fields___slug'
  | 'context___next___frontmatter___title'
  | 'context___next___frontmatter___tags'
  | 'context___tag'
  | 'context___posts'
  | 'context___id'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___plugins'
  | 'pluginCreator___pluginOptions___plugins___resolve'
  | 'pluginCreator___pluginOptions___plugins___id'
  | 'pluginCreator___pluginOptions___plugins___name'
  | 'pluginCreator___pluginOptions___plugins___version'
  | 'pluginCreator___pluginOptions___plugins___nodeAPIs'
  | 'pluginCreator___pluginOptions___plugins___browserAPIs'
  | 'pluginCreator___pluginOptions___plugins___pluginFilepath'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___prompt___user'
  | 'pluginCreator___pluginOptions___prompt___global'
  | 'pluginCreator___pluginOptions___maxWidth'
  | 'pluginCreator___pluginOptions___linkImagesToOriginal'
  | 'pluginCreator___pluginOptions___showCaptions'
  | 'pluginCreator___pluginOptions___markdownCaptions'
  | 'pluginCreator___pluginOptions___sizeByPixelDensity'
  | 'pluginCreator___pluginOptions___backgroundColor'
  | 'pluginCreator___pluginOptions___quality'
  | 'pluginCreator___pluginOptions___withWebp'
  | 'pluginCreator___pluginOptions___tracedSVG'
  | 'pluginCreator___pluginOptions___loading'
  | 'pluginCreator___pluginOptions___disableBgImageOnAlpha'
  | 'pluginCreator___pluginOptions___disableBgImage'
  | 'pluginCreator___pluginOptions___base64Width'
  | 'pluginCreator___pluginOptions___stripMetadata'
  | 'pluginCreator___pluginOptions___defaultQuality'
  | 'pluginCreator___pluginOptions___failOnError'
  | 'pluginCreator___pluginOptions___output'
  | 'pluginCreator___pluginOptions___createLinkInHead'
  | 'pluginCreator___pluginOptions___feeds'
  | 'pluginCreator___pluginOptions___feeds___title'
  | 'pluginCreator___pluginOptions___feeds___output'
  | 'pluginCreator___pluginOptions___feeds___query'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___legacy'
  | 'pluginCreator___pluginOptions___theme_color_in_head'
  | 'pluginCreator___pluginOptions___cache_busting_mode'
  | 'pluginCreator___pluginOptions___crossOrigin'
  | 'pluginCreator___pluginOptions___include_favicon'
  | 'pluginCreator___pluginOptions___cacheDigest'
  | 'pluginCreator___pluginOptions___codegen'
  | 'pluginCreator___pluginOptions___fileName'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___pluginOptions___allExtensions'
  | 'pluginCreator___pluginOptions___isTSX'
  | 'pluginCreator___pluginOptions___jsxPragma'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___author'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___plugins'
  | 'pluginOptions___plugins___resolve'
  | 'pluginOptions___plugins___id'
  | 'pluginOptions___plugins___name'
  | 'pluginOptions___plugins___version'
  | 'pluginOptions___plugins___pluginOptions___maxWidth'
  | 'pluginOptions___plugins___pluginOptions___linkImagesToOriginal'
  | 'pluginOptions___plugins___pluginOptions___showCaptions'
  | 'pluginOptions___plugins___pluginOptions___markdownCaptions'
  | 'pluginOptions___plugins___pluginOptions___sizeByPixelDensity'
  | 'pluginOptions___plugins___pluginOptions___backgroundColor'
  | 'pluginOptions___plugins___pluginOptions___quality'
  | 'pluginOptions___plugins___pluginOptions___withWebp'
  | 'pluginOptions___plugins___pluginOptions___tracedSVG'
  | 'pluginOptions___plugins___pluginOptions___loading'
  | 'pluginOptions___plugins___pluginOptions___disableBgImageOnAlpha'
  | 'pluginOptions___plugins___pluginOptions___disableBgImage'
  | 'pluginOptions___plugins___nodeAPIs'
  | 'pluginOptions___plugins___browserAPIs'
  | 'pluginOptions___plugins___pluginFilepath'
  | 'pluginOptions___name'
  | 'pluginOptions___path'
  | 'pluginOptions___prompt___user'
  | 'pluginOptions___prompt___global'
  | 'pluginOptions___maxWidth'
  | 'pluginOptions___linkImagesToOriginal'
  | 'pluginOptions___showCaptions'
  | 'pluginOptions___markdownCaptions'
  | 'pluginOptions___sizeByPixelDensity'
  | 'pluginOptions___backgroundColor'
  | 'pluginOptions___quality'
  | 'pluginOptions___withWebp'
  | 'pluginOptions___tracedSVG'
  | 'pluginOptions___loading'
  | 'pluginOptions___disableBgImageOnAlpha'
  | 'pluginOptions___disableBgImage'
  | 'pluginOptions___base64Width'
  | 'pluginOptions___stripMetadata'
  | 'pluginOptions___defaultQuality'
  | 'pluginOptions___failOnError'
  | 'pluginOptions___output'
  | 'pluginOptions___createLinkInHead'
  | 'pluginOptions___feeds'
  | 'pluginOptions___feeds___title'
  | 'pluginOptions___feeds___output'
  | 'pluginOptions___feeds___query'
  | 'pluginOptions___icon'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___crossOrigin'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___cacheDigest'
  | 'pluginOptions___codegen'
  | 'pluginOptions___fileName'
  | 'pluginOptions___pathCheck'
  | 'pluginOptions___allExtensions'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___jsxPragma'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  prompt?: Maybe<SitePluginPluginOptionsPrompt>;
  maxWidth?: Maybe<Scalars['Int']>;
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>;
  showCaptions?: Maybe<Scalars['Boolean']>;
  markdownCaptions?: Maybe<Scalars['Boolean']>;
  sizeByPixelDensity?: Maybe<Scalars['Boolean']>;
  backgroundColor?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  withWebp?: Maybe<Scalars['Boolean']>;
  tracedSVG?: Maybe<Scalars['Boolean']>;
  loading?: Maybe<Scalars['String']>;
  disableBgImageOnAlpha?: Maybe<Scalars['Boolean']>;
  disableBgImage?: Maybe<Scalars['Boolean']>;
  base64Width?: Maybe<Scalars['Int']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  output?: Maybe<Scalars['String']>;
  createLinkInHead?: Maybe<Scalars['Boolean']>;
  feeds?: Maybe<Array<Maybe<SitePluginPluginOptionsFeeds>>>;
  icon?: Maybe<Scalars['String']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  crossOrigin?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  codegen?: Maybe<Scalars['Boolean']>;
  fileName?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsFeeds = {
  title?: Maybe<Scalars['String']>;
  output?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsFeedsFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  output?: Maybe<StringQueryOperatorInput>;
  query?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFeedsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsFeedsFilterInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  prompt?: Maybe<SitePluginPluginOptionsPromptFilterInput>;
  maxWidth?: Maybe<IntQueryOperatorInput>;
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>;
  showCaptions?: Maybe<BooleanQueryOperatorInput>;
  markdownCaptions?: Maybe<BooleanQueryOperatorInput>;
  sizeByPixelDensity?: Maybe<BooleanQueryOperatorInput>;
  backgroundColor?: Maybe<StringQueryOperatorInput>;
  quality?: Maybe<IntQueryOperatorInput>;
  withWebp?: Maybe<BooleanQueryOperatorInput>;
  tracedSVG?: Maybe<BooleanQueryOperatorInput>;
  loading?: Maybe<StringQueryOperatorInput>;
  disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>;
  disableBgImage?: Maybe<BooleanQueryOperatorInput>;
  base64Width?: Maybe<IntQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  output?: Maybe<StringQueryOperatorInput>;
  createLinkInHead?: Maybe<BooleanQueryOperatorInput>;
  feeds?: Maybe<SitePluginPluginOptionsFeedsFilterListInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  crossOrigin?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  codegen?: Maybe<BooleanQueryOperatorInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPlugins = {
  resolve?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

export type SitePluginPluginOptionsPluginsPluginOptions = {
  prompt?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsPrompt>;
  maxWidth?: Maybe<Scalars['Int']>;
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>;
  showCaptions?: Maybe<Scalars['Boolean']>;
  markdownCaptions?: Maybe<Scalars['Boolean']>;
  sizeByPixelDensity?: Maybe<Scalars['Boolean']>;
  backgroundColor?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  withWebp?: Maybe<Scalars['Boolean']>;
  tracedSVG?: Maybe<Scalars['Boolean']>;
  loading?: Maybe<Scalars['String']>;
  disableBgImageOnAlpha?: Maybe<Scalars['Boolean']>;
  disableBgImage?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  prompt?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsPromptFilterInput>;
  maxWidth?: Maybe<IntQueryOperatorInput>;
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>;
  showCaptions?: Maybe<BooleanQueryOperatorInput>;
  markdownCaptions?: Maybe<BooleanQueryOperatorInput>;
  sizeByPixelDensity?: Maybe<BooleanQueryOperatorInput>;
  backgroundColor?: Maybe<StringQueryOperatorInput>;
  quality?: Maybe<IntQueryOperatorInput>;
  withWebp?: Maybe<BooleanQueryOperatorInput>;
  tracedSVG?: Maybe<BooleanQueryOperatorInput>;
  loading?: Maybe<StringQueryOperatorInput>;
  disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>;
  disableBgImage?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginsPluginOptionsPrompt = {
  user?: Maybe<Scalars['String']>;
  global?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsPluginsPluginOptionsPromptFilterInput = {
  user?: Maybe<StringQueryOperatorInput>;
  global?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsPrompt = {
  user?: Maybe<Scalars['String']>;
  global?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsPromptFilterInput = {
  user?: Maybe<StringQueryOperatorInput>;
  global?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  social?: Maybe<SiteSiteMetadataSocial>;
  author?: Maybe<SiteSiteMetadataAuthor>;
  organization?: Maybe<SiteSiteMetadataOrganization>;
};

export type SiteSiteMetadataAuthor = {
  name?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataAuthorFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<StringQueryOperatorInput>;
  social?: Maybe<SiteSiteMetadataSocialFilterInput>;
  author?: Maybe<SiteSiteMetadataAuthorFilterInput>;
  organization?: Maybe<SiteSiteMetadataOrganizationFilterInput>;
};

export type SiteSiteMetadataOrganization = {
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataOrganizationFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  logo?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataSocial = {
  twitter?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataSocialFilterInput = {
  twitter?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type TransparenciasYaml = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  contentUrl?: Maybe<File>;
  datePublished?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  fields?: Maybe<TransparenciasYamlFields>;
};


export type TransparenciasYamlDatePublishedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type TransparenciasYamlConnection = {
  totalCount: Scalars['Int'];
  edges: Array<TransparenciasYamlEdge>;
  nodes: Array<TransparenciasYaml>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<TransparenciasYamlGroupConnection>;
};


export type TransparenciasYamlConnectionDistinctArgs = {
  field: TransparenciasYamlFieldsEnum;
};


export type TransparenciasYamlConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: TransparenciasYamlFieldsEnum;
};

export type TransparenciasYamlEdge = {
  next?: Maybe<TransparenciasYaml>;
  node: TransparenciasYaml;
  previous?: Maybe<TransparenciasYaml>;
};

export type TransparenciasYamlFields = {
  slug?: Maybe<Scalars['String']>;
};

export type TransparenciasYamlFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'contentUrl___sourceInstanceName'
  | 'contentUrl___absolutePath'
  | 'contentUrl___relativePath'
  | 'contentUrl___extension'
  | 'contentUrl___size'
  | 'contentUrl___prettySize'
  | 'contentUrl___modifiedTime'
  | 'contentUrl___accessTime'
  | 'contentUrl___changeTime'
  | 'contentUrl___birthTime'
  | 'contentUrl___root'
  | 'contentUrl___dir'
  | 'contentUrl___base'
  | 'contentUrl___ext'
  | 'contentUrl___name'
  | 'contentUrl___relativeDirectory'
  | 'contentUrl___dev'
  | 'contentUrl___mode'
  | 'contentUrl___nlink'
  | 'contentUrl___uid'
  | 'contentUrl___gid'
  | 'contentUrl___rdev'
  | 'contentUrl___ino'
  | 'contentUrl___atimeMs'
  | 'contentUrl___mtimeMs'
  | 'contentUrl___ctimeMs'
  | 'contentUrl___atime'
  | 'contentUrl___mtime'
  | 'contentUrl___ctime'
  | 'contentUrl___birthtime'
  | 'contentUrl___birthtimeMs'
  | 'contentUrl___blksize'
  | 'contentUrl___blocks'
  | 'contentUrl___publicURL'
  | 'contentUrl___childrenMarkdownRemark'
  | 'contentUrl___childrenMarkdownRemark___id'
  | 'contentUrl___childrenMarkdownRemark___frontmatter___title'
  | 'contentUrl___childrenMarkdownRemark___frontmatter___datePublished'
  | 'contentUrl___childrenMarkdownRemark___frontmatter___tags'
  | 'contentUrl___childrenMarkdownRemark___frontmatter___description'
  | 'contentUrl___childrenMarkdownRemark___frontmatter___dateModified'
  | 'contentUrl___childrenMarkdownRemark___excerpt'
  | 'contentUrl___childrenMarkdownRemark___rawMarkdownBody'
  | 'contentUrl___childrenMarkdownRemark___fileAbsolutePath'
  | 'contentUrl___childrenMarkdownRemark___fields___slug'
  | 'contentUrl___childrenMarkdownRemark___html'
  | 'contentUrl___childrenMarkdownRemark___htmlAst'
  | 'contentUrl___childrenMarkdownRemark___excerptAst'
  | 'contentUrl___childrenMarkdownRemark___headings'
  | 'contentUrl___childrenMarkdownRemark___headings___id'
  | 'contentUrl___childrenMarkdownRemark___headings___value'
  | 'contentUrl___childrenMarkdownRemark___headings___depth'
  | 'contentUrl___childrenMarkdownRemark___timeToRead'
  | 'contentUrl___childrenMarkdownRemark___tableOfContents'
  | 'contentUrl___childrenMarkdownRemark___wordCount___paragraphs'
  | 'contentUrl___childrenMarkdownRemark___wordCount___sentences'
  | 'contentUrl___childrenMarkdownRemark___wordCount___words'
  | 'contentUrl___childrenMarkdownRemark___parent___id'
  | 'contentUrl___childrenMarkdownRemark___parent___children'
  | 'contentUrl___childrenMarkdownRemark___children'
  | 'contentUrl___childrenMarkdownRemark___children___id'
  | 'contentUrl___childrenMarkdownRemark___children___children'
  | 'contentUrl___childrenMarkdownRemark___internal___content'
  | 'contentUrl___childrenMarkdownRemark___internal___contentDigest'
  | 'contentUrl___childrenMarkdownRemark___internal___description'
  | 'contentUrl___childrenMarkdownRemark___internal___fieldOwners'
  | 'contentUrl___childrenMarkdownRemark___internal___ignoreType'
  | 'contentUrl___childrenMarkdownRemark___internal___mediaType'
  | 'contentUrl___childrenMarkdownRemark___internal___owner'
  | 'contentUrl___childrenMarkdownRemark___internal___type'
  | 'contentUrl___childMarkdownRemark___id'
  | 'contentUrl___childMarkdownRemark___frontmatter___title'
  | 'contentUrl___childMarkdownRemark___frontmatter___datePublished'
  | 'contentUrl___childMarkdownRemark___frontmatter___tags'
  | 'contentUrl___childMarkdownRemark___frontmatter___description'
  | 'contentUrl___childMarkdownRemark___frontmatter___dateModified'
  | 'contentUrl___childMarkdownRemark___excerpt'
  | 'contentUrl___childMarkdownRemark___rawMarkdownBody'
  | 'contentUrl___childMarkdownRemark___fileAbsolutePath'
  | 'contentUrl___childMarkdownRemark___fields___slug'
  | 'contentUrl___childMarkdownRemark___html'
  | 'contentUrl___childMarkdownRemark___htmlAst'
  | 'contentUrl___childMarkdownRemark___excerptAst'
  | 'contentUrl___childMarkdownRemark___headings'
  | 'contentUrl___childMarkdownRemark___headings___id'
  | 'contentUrl___childMarkdownRemark___headings___value'
  | 'contentUrl___childMarkdownRemark___headings___depth'
  | 'contentUrl___childMarkdownRemark___timeToRead'
  | 'contentUrl___childMarkdownRemark___tableOfContents'
  | 'contentUrl___childMarkdownRemark___wordCount___paragraphs'
  | 'contentUrl___childMarkdownRemark___wordCount___sentences'
  | 'contentUrl___childMarkdownRemark___wordCount___words'
  | 'contentUrl___childMarkdownRemark___parent___id'
  | 'contentUrl___childMarkdownRemark___parent___children'
  | 'contentUrl___childMarkdownRemark___children'
  | 'contentUrl___childMarkdownRemark___children___id'
  | 'contentUrl___childMarkdownRemark___children___children'
  | 'contentUrl___childMarkdownRemark___internal___content'
  | 'contentUrl___childMarkdownRemark___internal___contentDigest'
  | 'contentUrl___childMarkdownRemark___internal___description'
  | 'contentUrl___childMarkdownRemark___internal___fieldOwners'
  | 'contentUrl___childMarkdownRemark___internal___ignoreType'
  | 'contentUrl___childMarkdownRemark___internal___mediaType'
  | 'contentUrl___childMarkdownRemark___internal___owner'
  | 'contentUrl___childMarkdownRemark___internal___type'
  | 'contentUrl___childrenImageSharp'
  | 'contentUrl___childrenImageSharp___fixed___base64'
  | 'contentUrl___childrenImageSharp___fixed___tracedSVG'
  | 'contentUrl___childrenImageSharp___fixed___aspectRatio'
  | 'contentUrl___childrenImageSharp___fixed___width'
  | 'contentUrl___childrenImageSharp___fixed___height'
  | 'contentUrl___childrenImageSharp___fixed___src'
  | 'contentUrl___childrenImageSharp___fixed___srcSet'
  | 'contentUrl___childrenImageSharp___fixed___srcWebp'
  | 'contentUrl___childrenImageSharp___fixed___srcSetWebp'
  | 'contentUrl___childrenImageSharp___fixed___originalName'
  | 'contentUrl___childrenImageSharp___resolutions___base64'
  | 'contentUrl___childrenImageSharp___resolutions___tracedSVG'
  | 'contentUrl___childrenImageSharp___resolutions___aspectRatio'
  | 'contentUrl___childrenImageSharp___resolutions___width'
  | 'contentUrl___childrenImageSharp___resolutions___height'
  | 'contentUrl___childrenImageSharp___resolutions___src'
  | 'contentUrl___childrenImageSharp___resolutions___srcSet'
  | 'contentUrl___childrenImageSharp___resolutions___srcWebp'
  | 'contentUrl___childrenImageSharp___resolutions___srcSetWebp'
  | 'contentUrl___childrenImageSharp___resolutions___originalName'
  | 'contentUrl___childrenImageSharp___fluid___base64'
  | 'contentUrl___childrenImageSharp___fluid___tracedSVG'
  | 'contentUrl___childrenImageSharp___fluid___aspectRatio'
  | 'contentUrl___childrenImageSharp___fluid___src'
  | 'contentUrl___childrenImageSharp___fluid___srcSet'
  | 'contentUrl___childrenImageSharp___fluid___srcWebp'
  | 'contentUrl___childrenImageSharp___fluid___srcSetWebp'
  | 'contentUrl___childrenImageSharp___fluid___sizes'
  | 'contentUrl___childrenImageSharp___fluid___originalImg'
  | 'contentUrl___childrenImageSharp___fluid___originalName'
  | 'contentUrl___childrenImageSharp___fluid___presentationWidth'
  | 'contentUrl___childrenImageSharp___fluid___presentationHeight'
  | 'contentUrl___childrenImageSharp___sizes___base64'
  | 'contentUrl___childrenImageSharp___sizes___tracedSVG'
  | 'contentUrl___childrenImageSharp___sizes___aspectRatio'
  | 'contentUrl___childrenImageSharp___sizes___src'
  | 'contentUrl___childrenImageSharp___sizes___srcSet'
  | 'contentUrl___childrenImageSharp___sizes___srcWebp'
  | 'contentUrl___childrenImageSharp___sizes___srcSetWebp'
  | 'contentUrl___childrenImageSharp___sizes___sizes'
  | 'contentUrl___childrenImageSharp___sizes___originalImg'
  | 'contentUrl___childrenImageSharp___sizes___originalName'
  | 'contentUrl___childrenImageSharp___sizes___presentationWidth'
  | 'contentUrl___childrenImageSharp___sizes___presentationHeight'
  | 'contentUrl___childrenImageSharp___gatsbyImageData'
  | 'contentUrl___childrenImageSharp___original___width'
  | 'contentUrl___childrenImageSharp___original___height'
  | 'contentUrl___childrenImageSharp___original___src'
  | 'contentUrl___childrenImageSharp___resize___src'
  | 'contentUrl___childrenImageSharp___resize___tracedSVG'
  | 'contentUrl___childrenImageSharp___resize___width'
  | 'contentUrl___childrenImageSharp___resize___height'
  | 'contentUrl___childrenImageSharp___resize___aspectRatio'
  | 'contentUrl___childrenImageSharp___resize___originalName'
  | 'contentUrl___childrenImageSharp___id'
  | 'contentUrl___childrenImageSharp___parent___id'
  | 'contentUrl___childrenImageSharp___parent___children'
  | 'contentUrl___childrenImageSharp___children'
  | 'contentUrl___childrenImageSharp___children___id'
  | 'contentUrl___childrenImageSharp___children___children'
  | 'contentUrl___childrenImageSharp___internal___content'
  | 'contentUrl___childrenImageSharp___internal___contentDigest'
  | 'contentUrl___childrenImageSharp___internal___description'
  | 'contentUrl___childrenImageSharp___internal___fieldOwners'
  | 'contentUrl___childrenImageSharp___internal___ignoreType'
  | 'contentUrl___childrenImageSharp___internal___mediaType'
  | 'contentUrl___childrenImageSharp___internal___owner'
  | 'contentUrl___childrenImageSharp___internal___type'
  | 'contentUrl___childImageSharp___fixed___base64'
  | 'contentUrl___childImageSharp___fixed___tracedSVG'
  | 'contentUrl___childImageSharp___fixed___aspectRatio'
  | 'contentUrl___childImageSharp___fixed___width'
  | 'contentUrl___childImageSharp___fixed___height'
  | 'contentUrl___childImageSharp___fixed___src'
  | 'contentUrl___childImageSharp___fixed___srcSet'
  | 'contentUrl___childImageSharp___fixed___srcWebp'
  | 'contentUrl___childImageSharp___fixed___srcSetWebp'
  | 'contentUrl___childImageSharp___fixed___originalName'
  | 'contentUrl___childImageSharp___resolutions___base64'
  | 'contentUrl___childImageSharp___resolutions___tracedSVG'
  | 'contentUrl___childImageSharp___resolutions___aspectRatio'
  | 'contentUrl___childImageSharp___resolutions___width'
  | 'contentUrl___childImageSharp___resolutions___height'
  | 'contentUrl___childImageSharp___resolutions___src'
  | 'contentUrl___childImageSharp___resolutions___srcSet'
  | 'contentUrl___childImageSharp___resolutions___srcWebp'
  | 'contentUrl___childImageSharp___resolutions___srcSetWebp'
  | 'contentUrl___childImageSharp___resolutions___originalName'
  | 'contentUrl___childImageSharp___fluid___base64'
  | 'contentUrl___childImageSharp___fluid___tracedSVG'
  | 'contentUrl___childImageSharp___fluid___aspectRatio'
  | 'contentUrl___childImageSharp___fluid___src'
  | 'contentUrl___childImageSharp___fluid___srcSet'
  | 'contentUrl___childImageSharp___fluid___srcWebp'
  | 'contentUrl___childImageSharp___fluid___srcSetWebp'
  | 'contentUrl___childImageSharp___fluid___sizes'
  | 'contentUrl___childImageSharp___fluid___originalImg'
  | 'contentUrl___childImageSharp___fluid___originalName'
  | 'contentUrl___childImageSharp___fluid___presentationWidth'
  | 'contentUrl___childImageSharp___fluid___presentationHeight'
  | 'contentUrl___childImageSharp___sizes___base64'
  | 'contentUrl___childImageSharp___sizes___tracedSVG'
  | 'contentUrl___childImageSharp___sizes___aspectRatio'
  | 'contentUrl___childImageSharp___sizes___src'
  | 'contentUrl___childImageSharp___sizes___srcSet'
  | 'contentUrl___childImageSharp___sizes___srcWebp'
  | 'contentUrl___childImageSharp___sizes___srcSetWebp'
  | 'contentUrl___childImageSharp___sizes___sizes'
  | 'contentUrl___childImageSharp___sizes___originalImg'
  | 'contentUrl___childImageSharp___sizes___originalName'
  | 'contentUrl___childImageSharp___sizes___presentationWidth'
  | 'contentUrl___childImageSharp___sizes___presentationHeight'
  | 'contentUrl___childImageSharp___gatsbyImageData'
  | 'contentUrl___childImageSharp___original___width'
  | 'contentUrl___childImageSharp___original___height'
  | 'contentUrl___childImageSharp___original___src'
  | 'contentUrl___childImageSharp___resize___src'
  | 'contentUrl___childImageSharp___resize___tracedSVG'
  | 'contentUrl___childImageSharp___resize___width'
  | 'contentUrl___childImageSharp___resize___height'
  | 'contentUrl___childImageSharp___resize___aspectRatio'
  | 'contentUrl___childImageSharp___resize___originalName'
  | 'contentUrl___childImageSharp___id'
  | 'contentUrl___childImageSharp___parent___id'
  | 'contentUrl___childImageSharp___parent___children'
  | 'contentUrl___childImageSharp___children'
  | 'contentUrl___childImageSharp___children___id'
  | 'contentUrl___childImageSharp___children___children'
  | 'contentUrl___childImageSharp___internal___content'
  | 'contentUrl___childImageSharp___internal___contentDigest'
  | 'contentUrl___childImageSharp___internal___description'
  | 'contentUrl___childImageSharp___internal___fieldOwners'
  | 'contentUrl___childImageSharp___internal___ignoreType'
  | 'contentUrl___childImageSharp___internal___mediaType'
  | 'contentUrl___childImageSharp___internal___owner'
  | 'contentUrl___childImageSharp___internal___type'
  | 'contentUrl___childrenTransparenciasYaml'
  | 'contentUrl___childrenTransparenciasYaml___id'
  | 'contentUrl___childrenTransparenciasYaml___parent___id'
  | 'contentUrl___childrenTransparenciasYaml___parent___children'
  | 'contentUrl___childrenTransparenciasYaml___children'
  | 'contentUrl___childrenTransparenciasYaml___children___id'
  | 'contentUrl___childrenTransparenciasYaml___children___children'
  | 'contentUrl___childrenTransparenciasYaml___internal___content'
  | 'contentUrl___childrenTransparenciasYaml___internal___contentDigest'
  | 'contentUrl___childrenTransparenciasYaml___internal___description'
  | 'contentUrl___childrenTransparenciasYaml___internal___fieldOwners'
  | 'contentUrl___childrenTransparenciasYaml___internal___ignoreType'
  | 'contentUrl___childrenTransparenciasYaml___internal___mediaType'
  | 'contentUrl___childrenTransparenciasYaml___internal___owner'
  | 'contentUrl___childrenTransparenciasYaml___internal___type'
  | 'contentUrl___childrenTransparenciasYaml___title'
  | 'contentUrl___childrenTransparenciasYaml___contentUrl___sourceInstanceName'
  | 'contentUrl___childrenTransparenciasYaml___contentUrl___absolutePath'
  | 'contentUrl___childrenTransparenciasYaml___contentUrl___relativePath'
  | 'contentUrl___childrenTransparenciasYaml___contentUrl___extension'
  | 'contentUrl___childrenTransparenciasYaml___contentUrl___size'
  | 'contentUrl___childrenTransparenciasYaml___contentUrl___prettySize'
  | 'contentUrl___childrenTransparenciasYaml___contentUrl___modifiedTime'
  | 'contentUrl___childrenTransparenciasYaml___contentUrl___accessTime'
  | 'contentUrl___childrenTransparenciasYaml___contentUrl___changeTime'
  | 'contentUrl___childrenTransparenciasYaml___contentUrl___birthTime'
  | 'contentUrl___childrenTransparenciasYaml___contentUrl___root'
  | 'contentUrl___childrenTransparenciasYaml___contentUrl___dir'
  | 'contentUrl___childrenTransparenciasYaml___contentUrl___base'
  | 'contentUrl___childrenTransparenciasYaml___contentUrl___ext'
  | 'contentUrl___childrenTransparenciasYaml___contentUrl___name'
  | 'contentUrl___childrenTransparenciasYaml___contentUrl___relativeDirectory'
  | 'contentUrl___childrenTransparenciasYaml___contentUrl___dev'
  | 'contentUrl___childrenTransparenciasYaml___contentUrl___mode'
  | 'contentUrl___childrenTransparenciasYaml___contentUrl___nlink'
  | 'contentUrl___childrenTransparenciasYaml___contentUrl___uid'
  | 'contentUrl___childrenTransparenciasYaml___contentUrl___gid'
  | 'contentUrl___childrenTransparenciasYaml___contentUrl___rdev'
  | 'contentUrl___childrenTransparenciasYaml___contentUrl___ino'
  | 'contentUrl___childrenTransparenciasYaml___contentUrl___atimeMs'
  | 'contentUrl___childrenTransparenciasYaml___contentUrl___mtimeMs'
  | 'contentUrl___childrenTransparenciasYaml___contentUrl___ctimeMs'
  | 'contentUrl___childrenTransparenciasYaml___contentUrl___atime'
  | 'contentUrl___childrenTransparenciasYaml___contentUrl___mtime'
  | 'contentUrl___childrenTransparenciasYaml___contentUrl___ctime'
  | 'contentUrl___childrenTransparenciasYaml___contentUrl___birthtime'
  | 'contentUrl___childrenTransparenciasYaml___contentUrl___birthtimeMs'
  | 'contentUrl___childrenTransparenciasYaml___contentUrl___blksize'
  | 'contentUrl___childrenTransparenciasYaml___contentUrl___blocks'
  | 'contentUrl___childrenTransparenciasYaml___contentUrl___publicURL'
  | 'contentUrl___childrenTransparenciasYaml___contentUrl___childrenMarkdownRemark'
  | 'contentUrl___childrenTransparenciasYaml___contentUrl___childrenImageSharp'
  | 'contentUrl___childrenTransparenciasYaml___contentUrl___childrenTransparenciasYaml'
  | 'contentUrl___childrenTransparenciasYaml___contentUrl___id'
  | 'contentUrl___childrenTransparenciasYaml___contentUrl___children'
  | 'contentUrl___childrenTransparenciasYaml___datePublished'
  | 'contentUrl___childrenTransparenciasYaml___description'
  | 'contentUrl___childrenTransparenciasYaml___slug'
  | 'contentUrl___childrenTransparenciasYaml___type'
  | 'contentUrl___childrenTransparenciasYaml___url'
  | 'contentUrl___childrenTransparenciasYaml___fields___slug'
  | 'contentUrl___childTransparenciasYaml___id'
  | 'contentUrl___childTransparenciasYaml___parent___id'
  | 'contentUrl___childTransparenciasYaml___parent___children'
  | 'contentUrl___childTransparenciasYaml___children'
  | 'contentUrl___childTransparenciasYaml___children___id'
  | 'contentUrl___childTransparenciasYaml___children___children'
  | 'contentUrl___childTransparenciasYaml___internal___content'
  | 'contentUrl___childTransparenciasYaml___internal___contentDigest'
  | 'contentUrl___childTransparenciasYaml___internal___description'
  | 'contentUrl___childTransparenciasYaml___internal___fieldOwners'
  | 'contentUrl___childTransparenciasYaml___internal___ignoreType'
  | 'contentUrl___childTransparenciasYaml___internal___mediaType'
  | 'contentUrl___childTransparenciasYaml___internal___owner'
  | 'contentUrl___childTransparenciasYaml___internal___type'
  | 'contentUrl___childTransparenciasYaml___title'
  | 'contentUrl___childTransparenciasYaml___contentUrl___sourceInstanceName'
  | 'contentUrl___childTransparenciasYaml___contentUrl___absolutePath'
  | 'contentUrl___childTransparenciasYaml___contentUrl___relativePath'
  | 'contentUrl___childTransparenciasYaml___contentUrl___extension'
  | 'contentUrl___childTransparenciasYaml___contentUrl___size'
  | 'contentUrl___childTransparenciasYaml___contentUrl___prettySize'
  | 'contentUrl___childTransparenciasYaml___contentUrl___modifiedTime'
  | 'contentUrl___childTransparenciasYaml___contentUrl___accessTime'
  | 'contentUrl___childTransparenciasYaml___contentUrl___changeTime'
  | 'contentUrl___childTransparenciasYaml___contentUrl___birthTime'
  | 'contentUrl___childTransparenciasYaml___contentUrl___root'
  | 'contentUrl___childTransparenciasYaml___contentUrl___dir'
  | 'contentUrl___childTransparenciasYaml___contentUrl___base'
  | 'contentUrl___childTransparenciasYaml___contentUrl___ext'
  | 'contentUrl___childTransparenciasYaml___contentUrl___name'
  | 'contentUrl___childTransparenciasYaml___contentUrl___relativeDirectory'
  | 'contentUrl___childTransparenciasYaml___contentUrl___dev'
  | 'contentUrl___childTransparenciasYaml___contentUrl___mode'
  | 'contentUrl___childTransparenciasYaml___contentUrl___nlink'
  | 'contentUrl___childTransparenciasYaml___contentUrl___uid'
  | 'contentUrl___childTransparenciasYaml___contentUrl___gid'
  | 'contentUrl___childTransparenciasYaml___contentUrl___rdev'
  | 'contentUrl___childTransparenciasYaml___contentUrl___ino'
  | 'contentUrl___childTransparenciasYaml___contentUrl___atimeMs'
  | 'contentUrl___childTransparenciasYaml___contentUrl___mtimeMs'
  | 'contentUrl___childTransparenciasYaml___contentUrl___ctimeMs'
  | 'contentUrl___childTransparenciasYaml___contentUrl___atime'
  | 'contentUrl___childTransparenciasYaml___contentUrl___mtime'
  | 'contentUrl___childTransparenciasYaml___contentUrl___ctime'
  | 'contentUrl___childTransparenciasYaml___contentUrl___birthtime'
  | 'contentUrl___childTransparenciasYaml___contentUrl___birthtimeMs'
  | 'contentUrl___childTransparenciasYaml___contentUrl___blksize'
  | 'contentUrl___childTransparenciasYaml___contentUrl___blocks'
  | 'contentUrl___childTransparenciasYaml___contentUrl___publicURL'
  | 'contentUrl___childTransparenciasYaml___contentUrl___childrenMarkdownRemark'
  | 'contentUrl___childTransparenciasYaml___contentUrl___childrenImageSharp'
  | 'contentUrl___childTransparenciasYaml___contentUrl___childrenTransparenciasYaml'
  | 'contentUrl___childTransparenciasYaml___contentUrl___id'
  | 'contentUrl___childTransparenciasYaml___contentUrl___children'
  | 'contentUrl___childTransparenciasYaml___datePublished'
  | 'contentUrl___childTransparenciasYaml___description'
  | 'contentUrl___childTransparenciasYaml___slug'
  | 'contentUrl___childTransparenciasYaml___type'
  | 'contentUrl___childTransparenciasYaml___url'
  | 'contentUrl___childTransparenciasYaml___fields___slug'
  | 'contentUrl___id'
  | 'contentUrl___parent___id'
  | 'contentUrl___parent___parent___id'
  | 'contentUrl___parent___parent___children'
  | 'contentUrl___parent___children'
  | 'contentUrl___parent___children___id'
  | 'contentUrl___parent___children___children'
  | 'contentUrl___parent___internal___content'
  | 'contentUrl___parent___internal___contentDigest'
  | 'contentUrl___parent___internal___description'
  | 'contentUrl___parent___internal___fieldOwners'
  | 'contentUrl___parent___internal___ignoreType'
  | 'contentUrl___parent___internal___mediaType'
  | 'contentUrl___parent___internal___owner'
  | 'contentUrl___parent___internal___type'
  | 'contentUrl___children'
  | 'contentUrl___children___id'
  | 'contentUrl___children___parent___id'
  | 'contentUrl___children___parent___children'
  | 'contentUrl___children___children'
  | 'contentUrl___children___children___id'
  | 'contentUrl___children___children___children'
  | 'contentUrl___children___internal___content'
  | 'contentUrl___children___internal___contentDigest'
  | 'contentUrl___children___internal___description'
  | 'contentUrl___children___internal___fieldOwners'
  | 'contentUrl___children___internal___ignoreType'
  | 'contentUrl___children___internal___mediaType'
  | 'contentUrl___children___internal___owner'
  | 'contentUrl___children___internal___type'
  | 'contentUrl___internal___content'
  | 'contentUrl___internal___contentDigest'
  | 'contentUrl___internal___description'
  | 'contentUrl___internal___fieldOwners'
  | 'contentUrl___internal___ignoreType'
  | 'contentUrl___internal___mediaType'
  | 'contentUrl___internal___owner'
  | 'contentUrl___internal___type'
  | 'datePublished'
  | 'description'
  | 'slug'
  | 'type'
  | 'url'
  | 'fields___slug';

export type TransparenciasYamlFieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
};

export type TransparenciasYamlFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  contentUrl?: Maybe<FileFilterInput>;
  datePublished?: Maybe<DateQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<TransparenciasYamlFieldsFilterInput>;
};

export type TransparenciasYamlFilterListInput = {
  elemMatch?: Maybe<TransparenciasYamlFilterInput>;
};

export type TransparenciasYamlGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<TransparenciasYamlEdge>;
  nodes: Array<TransparenciasYaml>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type TransparenciasYamlSortInput = {
  fields?: Maybe<Array<Maybe<TransparenciasYamlFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

export type SiteLayoutQueryVariables = Exact<{ [key: string]: never; }>;


export type SiteLayoutQuery = { site?: Maybe<{ siteMetadata?: Maybe<(
      Pick<SiteSiteMetadata, 'title' | 'siteUrl'>
      & { author?: Maybe<Pick<SiteSiteMetadataAuthor, 'name'>> }
    )> }> };

export type SeoQueryVariables = Exact<{ [key: string]: never; }>;


export type SeoQuery = { site?: Maybe<{ siteMetadata?: Maybe<(
      Pick<SiteSiteMetadata, 'title' | 'description' | 'siteUrl' | 'image'>
      & { author?: Maybe<Pick<SiteSiteMetadataAuthor, 'name'>>, organization?: Maybe<Pick<SiteSiteMetadataOrganization, 'name' | 'url' | 'logo'>>, social?: Maybe<Pick<SiteSiteMetadataSocial, 'twitter'>> }
    )> }> };

export type HomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageQuery = { allMarkdownRemark: { edges: Array<{ node: (
        Pick<MarkdownRemark, 'excerpt'>
        & { fields?: Maybe<Pick<MarkdownRemarkFields, 'slug'>>, frontmatter?: Maybe<(
          Pick<MarkdownRemarkFrontmatter, 'title' | 'description'>
          & { image?: Maybe<(
            Pick<MarkdownRemarkFrontmatterImage, 'description'>
            & { contentUrl?: Maybe<{ childImageSharp?: Maybe<{ fixed?: Maybe<GatsbyImageSharpFixed_WithWebpFragment> }> }> }
          )> }
        )> }
      ) }> }, allTransparenciasYaml: { edges: Array<{ node: (
        Pick<TransparenciasYaml, 'description' | 'title'>
        & { fields?: Maybe<Pick<TransparenciasYamlFields, 'slug'>>, contentUrl?: Maybe<{ childImageSharp?: Maybe<{ fixed?: Maybe<GatsbyImageSharpFixed_WithWebpFragment> }> }> }
      ) }> } };

export type PostBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type PostBySlugQuery = { markdownRemark?: Maybe<(
    Pick<MarkdownRemark, 'excerpt' | 'timeToRead' | 'html'>
    & { fields?: Maybe<Pick<MarkdownRemarkFields, 'slug'>>, frontmatter?: Maybe<(
      Pick<MarkdownRemarkFrontmatter, 'title' | 'description' | 'datePublished' | 'dateModified' | 'tags'>
      & { image?: Maybe<(
        Pick<MarkdownRemarkFrontmatterImage, 'author' | 'description' | 'isBasedOn'>
        & { contentUrl?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<(
              GatsbyImageSharpFluid_WithWebp_TracedSvgFragment
              & GatsbyImageSharpFluidLimitPresentationSizeFragment
            )> }> }> }
      )> }
    )> }
  )> };

export type SlideBySlugQueryVariables = Exact<{
  id?: Maybe<Scalars['String']>;
}>;


export type SlideBySlugQuery = { transparenciasYaml?: Maybe<(
    Pick<TransparenciasYaml, 'datePublished' | 'description' | 'id' | 'title' | 'type' | 'url'>
    & { fields?: Maybe<Pick<TransparenciasYamlFields, 'slug'>> }
  )> };

export type PostsByTagQueryVariables = Exact<{
  posts: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
}>;


export type PostsByTagQuery = { allMarkdownRemark: { edges: Array<{ node: (
        Pick<MarkdownRemark, 'excerpt'>
        & { frontmatter?: Maybe<(
          Pick<MarkdownRemarkFrontmatter, 'title' | 'description'>
          & { image?: Maybe<(
            Pick<MarkdownRemarkFrontmatterImage, 'author' | 'description' | 'isBasedOn'>
            & { contentUrl?: Maybe<{ childImageSharp?: Maybe<{ fixed?: Maybe<GatsbyImageSharpFixed_WithWebpFragment> }> }> }
          )> }
        )>, fields?: Maybe<Pick<MarkdownRemarkFields, 'slug'>> }
      ) }> } };

export type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

export type GatsbyImageSharpFluid_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
