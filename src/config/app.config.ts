interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Financial Manager'],
  tenantName: 'Company',
  applicationName: ' Financial Planning and Management v2',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read company information',
    'Read financial goals',
    'Read financial policies',
    'Read financial programs',
  ],
  ownerAbilities: [
    'Manage users',
    'Manage companies',
    'Manage financial goals',
    'Manage financial policies',
    'Manage financial procedures',
    'Manage financial programs',
    'Manage budgets',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/a377065d-5e20-451a-aa10-ffbfe850b440',
};
