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
    case "users":
      return USER;
    case "classroom":
      return CLASSROOM;
  }
}
