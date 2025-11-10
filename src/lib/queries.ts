export const postsAndPostBySlugQuery = `
{
  "allPosts": *[_type == "post"] | order(_createdAt desc) {
    title,
    "slug": slug.current,
    image {
      asset->{
        _id,
        url
      },
      crop,
      hotspot
    },
    direction,
    description,
    content,
    "createdAt": _createdAt
  },
  "postBySlug": *[_type == "post" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    image {
      asset->{
        _id,
        url
      },
      crop,
      hotspot
    },
    direction,
    description,
    content,
    "createdAt": _createdAt
  }
}
`;

export const allPostsQuery = `
  *[_type == "post"] | order(_createdAt desc) {
    title,
    "slug": slug.current,
    image {
      asset->{
        _id,
        url
      },
      crop,
      hotspot
    },
    direction,
    description,
    content,
    "createdAt": _createdAt
  }
`;

export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    image {
      asset->{
        _id,
        url
      },
      crop,
      hotspot
    },
    direction,
    description,
    content,
    "createdAt": _createdAt
  }
`;

export const allDoctorsQuery = `
  *[_type == "doctor"] | order(_createdAt asc) {
    "id": _id,
    name,
    photo {
      asset->{
        _id,
        url
      },
      crop,
      hotspot
    },
    position
  }
`;

export const allServicesQuery = `
  *[_type == "service"] | order(_createdAt desc) {
    title,
    "slug": slug.current,
    categoryImage {
      asset->{
        _id,
        url
      },
      crop,
      hotspot
    }
  }
`;

export const allPriceCategoriesQuery = `
  *[_type == "priceCategory"] | order(order asc) {
    title,
    colorScheme,
    subcategories[] {
      title,
      services[] {
        title,
        price,
        duration
      }
    }
  }
`;
