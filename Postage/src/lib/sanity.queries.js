import { groq } from 'next-sanity';

export const homePageQuery = groq`
*[_type == 'page' && title == 'Home'][0]{
  title,
  slug,
  seo,
  siteIndex,
  "sections": {
    "hero": content[_type == 'hero'][0] {
      title,
      "id": label.current,
      "backgroundImage": backgroundImage.asset->{
        url,
        metadata,
      },
      "header": {
        "heading": heading.heading,
        "codeHeading": heading.codeHeading.code,
        "enableHtmlHeader": heading.conditionalHeading,
      },
      "tagline": tagline[].children[0] {
        text,
        marks
      },
      "backgroundFilter": filter,
    "productPreview": {
      "header": {
        "heading": area[0].heading.heading,
        "codeHeading": area[0].heading.codeHeading.code,
        "enableHtmlHeader": area[0].heading.conditionalHeading ,
        
      },
      "image": {
        "web": area[0].image.asset->{
          url,
          metadata,
        },
        "mobile": area[1].asset->{
          url,
          metadata,
        }
      },
      "body": area[0].text[0].children[]{
          text,
          marks
      }
      },
    },
    "reel": content[_type == 'reel'][0]{
      title,
      id,
      "items": reelItems[]
    },
    "benefits": content[_type == "referenceSection"][0]{
       title,
      "id": label.current,
      "children": content[][0]->{
         "item": benefitItem[]{
           title,
           "image": image.asset->{
             url,
             metadata
           },
           "text": textItems[]{
             title,
             "label": label.current
           }
         }
      },
      "buttonOne": {
        "text": area[0].text,
        "route": area[0].route.linkUrl
      },
      "buttonTwo": {
        "text": area[1].text,
        "route": area[1].route.linkUrl
      },
    },
    "ctaOne": content[_type == "cta"][0]{
      title,
      "id": label.current,
      "image": {
        "alt": backgroundImage.alt,
        "url": backgroundImage.asset->url,
        "metadata": backgroundImage.asset->metadata,
      },
      "header": {
        "heading": heading.heading,
        "codeHeading": heading.codeHeading.code,
        "enableHtmlHeader": heading.conditionalHeading,
      },
      subHeading,
      "button": {
        "text": buttonText,
        "route": route.linkUrl
      },
      "tagline": tagline[0]{
          children[0]{
          text,
          marks
          }
      },
    },
    "thePostageWay": content[_type == "referenceSection"][1]{
       title,
      "id": label.current,
      "header": {
        "heading": heading.heading,
        "codeHeading": heading.codeHeading.code,
        "enableHtmlHeader": heading.conditionalHeading,
      },
      subHeading,
      "tagline": tagline[0]{
        "text": children[0].text,
        "marks": children[0].marks,
      },
      "children": content[][0]->{
         "item": benefitItem[]{
           title,
           "text": message,
           "image": {
              "alt": image.alt,
              "url": image.asset->url,
              "metadata": image.asset->metadata,
            },
         }
      },
      "button": {
        "text": area[0].text,
        "route": area[0].route.linkUrl
      },
    },
    "whyChoosePostage": content[_type == "referenceSection"][2]{
       title,
      "id": label.current,
      "header": {
        "heading": heading.heading,
        "codeHeading": heading.codeHeading.code,
        "enableHtmlHeader": heading.conditionalHeading,
      },
      "children": content[][0]->{
         "item": benefitItem[]{
           title,
           "image": {
              "alt": image.alt,
              "url": image.asset->url,
              "metadata": image.asset->metadata,
            },
         }
      },
    },
    "patientTestimonials": content[_type == "referenceSection"][3]{
      title,
      "id": label.current,
      "header": {
        "heading": heading.heading,
        "codeHeading": heading.codeHeading.code,
        "enableHtmlHeader": heading.conditionalHeading,
      },
      subHeading,
      "tagline": tagline[0]{
        "text": children[].text,
        "marks": children[].marks,
      },
      "tagline2": tagline[0].children[]{
        text,
        marks
      },
      "testimonial": content[]->{
        name,
        message,
        profession,
        publishedAt,
        "image": {
          "alt": image.alt,
          "url": image.asset->url,
          "metadata": image.asset->metadata,
        },
      }
    },
    "ctaTwo": content[_type == "cta"][1]{
      title,
      "id": label.current,
      "header": {
        "heading": heading.heading,
        "codeHeading": heading.codeHeading.code,
        "enableHtmlHeader": heading.conditionalHeading,
      },
      "button": {
        "text": buttonText,
        "route": route.linkUrl
      },
    }
  }
}`;

export const howItWorksPageQuery = groq`
*[_type == 'page' && slug.current == 'how-it-works'][0]{
  title,
  slug,
  seo,
  siteIndex,
  'sections': {
    "hero": content[_type == 'hero'][0] {
      title,
      "id": label.current,
      "backgroundImage": backgroundImage.asset->{
        alt,
        url,
        metadata,
      },
      "header": {
        "heading": heading.heading,
        "codeHeading": heading.codeHeading.code,
        "enableHtmlHeader": heading.conditionalHeading,
      },
      "tagline": tagline[].children[] {
        text,
        marks
      },
      "backgroundFilter": filter,
    },
    "howItWorks": content[_type == 'referenceSection'][0] {
      title,
      "id": label.current,
      subHeading,
      "header": {
        "heading": heading.heading,
        "codeHeading": heading.codeHeading.code,
        "enableHtmlHeader": heading.conditionalHeading,
      },
      "steps": content[0]->{
        "title": benefitItem[].title,
        "text": benefitItem[].message,
        "number": benefitItem[].textItems[0].text[0].children[0].text
      },
      "costs": area[_type == 'textItem']{
        title,
        "id": label.current,
        "item": text[0]{
          "text": children[].text,
          "marks": children[].marks,
        },
      },
      "images": area[_type == 'figure']{
        "alt": asset->altText,
        "url": asset->url,
        "metadata": asset->metadata,
      }
    },
    "membership": content[_type == 'referenceSection'][1] {
      title,
      "id": label.current,
      subHeading,
      "backgroundImage": backgroundImage.asset->{
        alt,
        url,
        metadata,
      },
      "header": {
        "heading": heading.heading,
        "codeHeading": heading.codeHeading.code,
        "enableHtmlHeader": heading.conditionalHeading,
      },
      "info": content[0]->{
        "item": benefitItem[]{
          "title": title,
          "text": message,
        }
      },
      "cost": area[_type == 'textItem'][0]{
        title,
        "id": label.current,
        "item": text[0]{
          "text": children[].text,
          "marks": children[].marks,
        },
      },
    },
    "medications": content[_type == 'referenceSection'][2] {
      title,
      "id": label.current,
      "header": {
        "heading": heading.heading,
        "codeHeading": heading.codeHeading.code,
        "enableHtmlHeader": heading.conditionalHeading,
      },
      "medication": content[]->{
        title,
        blurb,
        description,
        price,
        currency,
        "categories": category[]->{
          ...
        },
        "image": image.asset->{
          alt,
          url,
          metadata
        },
      }
    },
    "faqs": content[_type == 'referenceSection'][3] {
      title,
      "id": label.current,
      subHeading,
      "tagline": tagline[].children[] {
        text,
        marks
      }, 
      "header": {
        "heading": heading.heading,
        "codeHeading": heading.codeHeading.code,
        "enableHtmlHeader": heading.conditionalHeading,
      },
      "faq": content[]->{
        title,
        "id": label.current,
        question,
        answer
      },
      "button": {
        "text": area[0].text,
        "route": area[0].route.linkUrl
      },
    }
  }
}
`;

const postFields = groq`
  _id,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
  `;

export const testimonialsQuery = groq`*[_type == 'testimonial']`;

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`;

export const allKnowledgeBasePostDetails = groq`
*[_type == 'knowledgeBase']{
  "objectID": _id,
  title,
  excerpt,
  "slug": slug.current,
  "published": publishedAt,
  "updated": updated,
  "meta": {
    "count": count(*[_type == 'knowledgeBase']) 
  }
}
`;

export const allKnowledgeBasePost = groq`
*[_type == 'knowledgeBase']{
  _type,
  "objectID": _id,
  title,
  excerpt,
  "category": category->,
  "tags": tags->,
  "slug": slug.current,
  "published": publishedAt,
  "updated": updated,
  "meta": {
    "count": count(*[_type == 'knowledgeBase']) 
  },
  "content": {
    ...
  }
}
`;
