import React from "react";

const Blog = () => {
  return (
    <div>
      <h2>This is blog Section</h2>
      <h3>Question and Answer</h3>
      <h4>1. Difference between authorization and authentication</h4>
      <p>
        Authentication is the method of defining whether individual or something
        is who or what it says it is. It is the process of identifying a user's
        identity. Authorization is the procedure of verifying what specific
        applications, files, and data a user has access over. Authentication is
        done before the authorization process, whereas the authorization process
        is performed after the authentication process. Finally authentication
        verifies a user's identity. Authorization then grants that user
        permission to access a system.
      </p>

      <h4>
        2. Why are you using firebase? What other options do you have to
        implement authentication?
      </h4>
      <p>
        Firebase is used for many features that can help your apps to build,
        improve and make it quality apps. Moreover, Firebase was built with a
        developer in mind to solve all the issues they might face when making an
        app. Firebase is a less technical and more time-saving alternative to
        writing full-fledged backend code for dynamic apps. Additionally, as a
        Google Cloud service, it gives you access to other Google products and
        features, such as Google Drive and Sheets. Other Option to implement
        authentication is --Password-based authentication --Multi-factor
        authentication --Certificate-based authentication -- Biometric
        authentication --Token-based authentication.
      </p>

      <h4>
        3. What other services does firebase provide other than authentication?
      </h4>
      <p>
        --Back4App-- Back4app is a reliable Firebase option that works with an
        amalgamation of open-source technologies. The platform is clear to use
        and has a low learning angle.

        --Parse--
Parse is a complete application stack that will help you build applications faster.

--AWS Amplify--
AWS Amplify allows web and mobile developers to create full-stack applications with a set o fit-to-purpose tools and components.
      </p>
    </div>
  );
};

export default Blog;
