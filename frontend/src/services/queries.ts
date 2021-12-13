const ACLS = `
query fetchAllAcls {
  acls {
    count
    collection {
      formal_name
      title
      district
      permission
      _id
      classroom {
        _id
      }
    }
  }
}
`;

const BILLS = `
query fetchAllBills {
  bills {
    count
    collection {
      _id
      prefix
      name
      created
      classroom {
        _id
      }
    }
  }
}
`;

const CHAMBERS = `
query fetchAllChambers {
  chambers {
    count
    collection {
      _id
      name
      legislation_prefix
      classroom {
        _id
      }
    }
  }
}
`;

const CLASSROOM = `
query fetchAllClassrooms {
  classroom {
    count
    collection {
      name
      invite_code
      _id
    }
  }
}
`;

const DISCUSSIONS = `
query fetchAllDiscussions {
  discussions {
    count
    collection {
      _id
      author
      name
      created
      comment_count
      classroom {
        _id
      }
    }
  }
}
`;

const USER = `
query fetchAllUsers {
  users {
    count
    collection {
      username
      email
      _id
    }
  }
}
`;

export function getQuery(queryName: string) {
  switch (queryName) {
    case "acls":
      return ACLS;
    case "bills":
      return BILLS;
    case "chambers":
      return CHAMBERS;
    case "classroom":
      return CLASSROOM;
    case "discussions":
      return DISCUSSIONS;
    case "users":
      return USER;
    default:
      break;
  }
}
