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
  *[_type == "doctor"] | order(order asc) {
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
    position,
    startYear,
    direction,
    description,
    order
  }
`;

export const allServicesQuery = `
  *[_type == "service"] | order(order asc) {
    title,
    "slug": slug.current,
    category,
    order,
    categoryImage {
      asset->{
        _id,
        url
      },
      crop,
      hotspot
    },
    mainImage {
      asset->{
        _id,
        url
      },
      crop,
      hotspot
    },
    shortDescription,
    procedureDescription {
      text,
      images[] {
        "asset": asset->{
          _id,
          url
        },
        crop,
        hotspot
      },
      info
    },
    recommended[] {
      image {
        asset->{
          _id,
          url
        },
        crop,
        hotspot
      },
      text
    },
    howItGoes {
      image {
        asset->{
          _id,
          url
        },
        crop,
        hotspot
      },
      steps {
        title,
        description
      }
    },
    advantages[] {
      "icon": icon.asset->url,
      title,
      text
    },
    contraindications {
      image {
        asset->{
          _id,
          url
        },
        crop,
        hotspot
      },
      items
    },
    types {
      title,
      list[] {
        image {
          asset->{
            _id,
            url
          },
          crop,
          hotspot
        },
        title,
        text,
        details
      }
    },
    pricing {
      link
    }
  }
`;

export const serviceBySlugQuery = `
  *[_type == "service" && slug.current == $slug][0] {
    title,
    category,
    order,
    categoryImage {
      asset->{
        _id,
        url
      },
      crop,
      hotspot
    },
    mainImage {
      asset->{
        _id,
        url
      },
      crop,
      hotspot
    },
    shortDescription,
    "slug": slug.current,
    procedureDescription {
      text,
      images[] {
        "asset": asset->{
          _id,
          url
        },
        crop,
        hotspot
      },
      info
    },
    recommended[] {
      image {
        asset->{
          _id,
          url
        },
        crop,
        hotspot
      },
      text
    },
    howItGoes {
      image {
        asset->{
          _id,
          url
        },
        crop,
        hotspot
      },
      steps[] {
        title,
        description
      }
    },
    advantages[] {
      "icon": icon.asset->url,
      title,
      text
    },
    contraindications {
      image {
        asset->{
          _id,
          url
        },
        crop,
        hotspot
      },
      items
    },
    types {
      title,
      list[] {
        image {
          asset->{
            _id,
            url
          },
          crop,
          hotspot
        },
        title,
        text,
        details
      }
    }
  }
`;

export const allPriceCategoriesQuery = `
  *[_type == "priceCategory"] | order(_createdAt asc) {
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
