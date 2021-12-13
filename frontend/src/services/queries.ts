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
    case "classroom":
      return CLASSROOM;
    case "users":
      return USER;
  }
}
