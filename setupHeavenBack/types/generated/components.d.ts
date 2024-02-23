import type { Schema, Attribute } from '@strapi/strapi';

export interface CptConfigCptConfig extends Schema.Component {
  collectionName: 'components_cpt_config_cpt_configs';
  info: {
    displayName: 'cptConfig';
    icon: 'archive';
  };
  attributes: {
    cpu: Attribute.String;
    gpu: Attribute.String;
    motherboard: Attribute.String;
    ram: Attribute.String;
    case: Attribute.String;
    hdd: Attribute.String;
    ssd: Attribute.String;
  };
}

export interface SetupObjectSetupObject extends Schema.Component {
  collectionName: 'components_setup_object_setup_objects';
  info: {
    displayName: 'setupObject';
    icon: 'archive';
  };
  attributes: {
    ObjectType: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ThemeThemeTag extends Schema.Component {
  collectionName: 'components_theme_theme_tags';
  info: {
    displayName: 'themeTag';
    icon: 'brush';
  };
  attributes: {
    tagName: Attribute.Enumeration<
      [
        'cosy',
        'gaming',
        'work',
        'rgb',
        'pastel',
        'studying',
        'minimal',
        'anime'
      ]
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'cpt-config.cpt-config': CptConfigCptConfig;
      'setup-object.setup-object': SetupObjectSetupObject;
      'theme.theme-tag': ThemeThemeTag;
    }
  }
}
