import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsHeader extends Schema.Component {
  collectionName: 'components_common_headers';
  info: {
    displayName: 'header';
    description: '';
  };
  attributes: {
    page_title: Attribute.String;
    meta_title: Attribute.String;
    meta_keywords: Attribute.String;
    meta_description: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.header': ComponentsHeader;
    }
  }
}
