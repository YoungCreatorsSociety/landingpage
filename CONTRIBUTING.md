# Getting ready

*This assumes you've already set up Git and cloned this repo locally.*

1. Install Node.js
2. Install `grunt-cli` globally

        npm install -g grunt-cli

3. Enter your repo's directory

        cd landingpage

3. Install the development dependencies

        npm install

# Developing
## Commit messages
Follow these simple standards to ensure commit message consistency:
###Message format
Every message includes:
 - Its type
 - Its purpose

and is in the format **```type:purpose```**.

#### Type

Quickly indicates what kind of commit this is.

Must be one of the following:

- **feat**: New feature
- **fix**: Bug fix
- **refactor**: Code change that neither fixes a bug or adds a feature
- **docs**: Documentation change
- **style**: Change that does not affect the meaning of the code (ex. typos)
- **chore**: Change to the build process or auxiliary tools and libraries

#### Purpose

Explains the contents of the commit.

- Use **past** tense, like *Added*, not *Adds*, *Add*, *Adding*, etc.
- Capitalize the first word.
- No period (.) at the end.

## Generating Files
This will automatically generate some files (like CSS from Sass, for instance) when you save any file that's being watched.

1. Start `grunt watch`

        cd landingpage
        grunt watch
