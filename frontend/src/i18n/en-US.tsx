const enUS = {
  common: {
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    new: 'New',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
    start: 'Start',
    end: 'End',
    select: 'Select',
    continue: 'Continue',
    filters: 'Filters',
    more: 'More',
  },

  app: {
    title: 'Worksheet',
  },

  api: {
    menu: 'API',
  },

  mui: {
    configurator: {
      title: 'Dashboard Configurator',
      description: 'See our dashboard options.',
      sidenavColor: 'Colors',
      sidenavType: {
        title: 'Sidenav Type',
        description:
          'Choose between different sidenav types.',
        dark: 'Dark',
        transparent: 'Transparent',
        white: 'white',
      },
      navbarFixed: 'Navbar Fixed',
      sidenavMini: 'Sidenav Mini',
      sidenavDark: 'Light / Dark',
    },
  },

  collapses: {
    management: {
      menu: 'Management',
    },
  },

  entities: {
    shop: {
      name: 'store',
      label: 'Store',
      menu: 'Store',
      exporterFileName: 'store_export',
      list: {
        menu: 'Store',
        title: 'Store',
      },
      create: {
        success: 'Store successfully saved',
      },
      update: {
        success: 'Store successfully saved',
      },
      destroy: {
        success: 'Store successfully deleted',
      },
      destroyAll: {
        success: 'Store(s) successfully deleted',
      },
      edit: {
        title: 'Edit Store',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        manager: 'Manager',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Store',
      },
      view: {
        title: 'View Store',
      },
      importer: {
        title: 'Import Stores',
        fileName: 'department_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    department: {
      name: 'department',
      label: 'Department',
      menu: 'Department',
      exporterFileName: 'department_export',
      list: {
        menu: 'Department',
        title: 'Department',
      },
      create: {
        success: 'Department successfully saved',
      },
      update: {
        success: 'Department successfully saved',
      },
      destroy: {
        success: 'Department successfully deleted',
      },
      destroyAll: {
        success: 'Department(s) successfully deleted',
      },
      edit: {
        title: 'Edit Department',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        shop: 'Shop',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Department',
      },
      view: {
        title: 'View Department',
      },
      importer: {
        title: 'Import Departments',
        fileName: 'department_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    section: {
      name: 'section',
      label: 'Section',
      menu: 'Section',
      exporterFileName: 'section_export',
      list: {
        menu: 'Section',
        title: 'Section',
      },
      create: {
        success: 'Section successfully saved',
      },
      update: {
        success: 'Section successfully saved',
      },
      destroy: {
        success: 'Section successfully deleted',
      },
      destroyAll: {
        success: 'Section(s) successfully deleted',
      },
      edit: {
        title: 'Edit Section',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        shop: 'Shop',
        department: 'Department',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Section',
      },
      view: {
        title: 'View Section',
      },
      importer: {
        title: 'Import Sections',
        fileName: 'section_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    shelf: {
      name: 'shelf',
      label: 'Shelf',
      menu: 'Shelf',
      exporterFileName: 'shelf_export',
      list: {
        menu: 'Shelf',
        title: 'Shelf',
      },
      create: {
        success: 'Shelf successfully saved',
      },
      update: {
        success: 'Shelf successfully saved',
      },
      destroy: {
        success: 'Shelf successfully deleted',
      },
      destroyAll: {
        success: 'Shelf(s) successfully deleted',
      },
      edit: {
        title: 'Edit Shelf',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        shop: 'Shop',
        department: 'Department',
        section: 'Section',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Shelf',
      },
      view: {
        title: 'View Shelf',
      },
      importer: {
        title: 'Import Shelves',
        fileName: 'shelf_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    facing: {
      name: 'facing',
      label: 'Facing',
      menu: 'Facing',
      exporterFileName: 'facing_export',
      list: {
        menu: 'Facing',
        title: 'Facing',
      },
      create: {
        success: 'Facing successfully saved',
      },
      update: {
        success: 'Facing successfully saved',
      },
      destroy: {
        success: 'Facing successfully deleted',
      },
      destroyAll: {
        success: 'Facing(s) successfully deleted',
      },
      edit: {
        title: 'Edit Facing',
      },
      fields: {
        id: 'Id',
        model: 'Model',
        type: 'Type',
        sn: 'Serial Number',
        shop: 'Shop',
        department: 'Department',
        section: 'Section',
        shelf: 'Shelf',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
      },
      enumerators: {
        type: {
          Pusher: 'Pusher',
          Hook: 'Hook',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New Facing',
      },
      view: {
        title: 'View Facing',
      },
      importer: {
        title: 'Import Facings',
        fileName: 'facing_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
  },

  auth: {
    tenants: 'Companies',
    profile: {
      title: 'Profile',
      success: 'Profile successfully updated',
    },
    createAnAccount: 'Create an account',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
    alreadyHaveAnAccount:
      'Already have an account? Sign in.',
    social: {
      errors: {
        'auth-invalid-provider':
          'This email is already registered to another provider.',
        'auth-no-email': `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount:
      'Sign in with another account',
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordResetEmail: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    passwordChange: {
      title: 'Change Password',
      success: 'Password successfully changed',
      mustMatch: 'Passwords must match',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email successfully sent`,
    passwordResetEmailSuccess: `Password reset email successfully sent`,
    passwordResetSuccess: `Password successfully changed`,
    verifyEmail: {
      success: 'Email successfully verified.',
      message:
        'Just a moment, your email is being verified...',
    },
  },

  roles: {
    admin: {
      label: 'Admin',
      description: 'Full access to all resources',
    },
    custom: {
      label: 'Custom Role',
      description: 'Custom role access',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      status: 'Status',
      phoneNumber: 'Phone Number',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      oldPassword: 'Old Password',
      newPassword: 'New Password',
      newPasswordConfirmation: 'New Password Confirmation',
      rememberMe: 'Remember me',
    },
    status: {
      active: 'Active',
      invited: 'Invited',
      'empty-permissions': 'Waiting for Permissions',
    },
    invite: 'Invite',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
    title: 'Users',
    menu: 'Users',
    doAddSuccess: 'User(s) successfully saved',
    doUpdateSuccess: 'User successfully saved',
    exporterFileName: 'users_export',
    doDestroySuccess: 'User successfully deleted',
    doDestroyAllSelectedSuccess:
      'Users successfully deleted',
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'Invite User(s)',
      titleModal: 'Invite User',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'View User',
      activity: 'Activity',
    },
    importer: {
      title: 'Import Users',
      fileName: 'users_import_template',
      hint: 'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      revokingOwnPermission: `You can't revoke your own admin permission`,
    },
  },

  tenant: {
    name: 'company',
    label: 'Companies',
    menu: 'Companies',
    list: {
      menu: 'Companies',
      title: 'Companies',
    },
    create: {
      button: 'Add Company',
      success: 'Company successfully saved',
    },
    update: {
      success: 'Company successfully saved',
    },
    destroy: {
      success: 'Company successfully deleted',
    },
    destroyAll: {
      success: 'Company(s) successfully deleted',
    },
    edit: {
      title: 'Edit Company',
    },
    fields: {
      id: 'Id',
      name: 'Name',
      url: 'URL',
      tenantName: 'Company Name',
      tenantId: 'Company',
      tenantUrl: 'Company URL',
    },
    enumerators: {},
    new: {
      title: 'Add Company',
    },
    invitation: {
      view: 'View Invitations',
      invited: 'Invited',
      accept: 'Accept Invitation',
      decline: 'Decline Invitation',
      declined: 'Invitation successfully declined',
      acceptWrongEmail: 'Accept Invitation With This Email',
    },
    select: 'Select Company',
    validation: {
      url: 'Your company URL can only contain lowercase letters, numbers and dashes (and must start with a letter or number).',
    },
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },

  settings: {
    title: 'Settings',
    tenant: 'Company',
    menu: 'Settings',
    save: {
      success:
        'Settings successfully saved. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      primary: 'Primary Color',
      secondary: 'Secondary Color',
      logos: 'Logo',
      backgroundImages: 'Background Images',
      shade: 'Shade',
    },
  },

  dashboard: {
    menu: 'Dashboard',
    message: `This page uses fake data for demonstration purposes only. You can edit it at frontend/view/dashboard/DashboardPage.ts.`,
    charts: {
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      orange: 'Orange',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
    },
  },

  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    429: 'Too many requests. Please try again later.',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },

  preview: {
    error:
      'Sorry, this operation is not allowed in preview mode.',
  },

  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min: '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} is required`
          : `${path} field must have at least ${min} items`,
      max: '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be one of: {0}.`,
  },

  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `{0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint: 'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  autocomplete: {
    loading: 'Loading...',
    noOptions: 'No data found',
  },

  customViewer: {
    default: 'No Data',
    noData: 'No {0}',
  },

  imagesViewer: {
    noImage: 'No image',
  },

  table: {
    noData: 'No records found',
    loading: 'Loading...',
  },

  pagination: {
    labelDisplayedRows: '{0}-{1} of {2}',
    labelRowsPerPage: 'Per page:',
  },
};

export default enUS;
