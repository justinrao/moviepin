### Movie Pin - "Pintrest" like app for movies.

### Live Website
https://bit.ly/2TLhrEN 

#### Stack
- react 16
- react-router
- gestalt - Pintrest component library 
- TypeScript
- Jest / Enzyme

#### Design
- Dump / Smart Component Seperation

#### Tasks

##### AWS-Amplify
Your project has been successfully initialized and connected to the cloud!

Some next steps:
"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify <category> add" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

Pro tip:
Try "amplify add api" to create a backend API and then "amplify publish" to deploy everything

##### Cognito

##### Reconnect to AWS Backend project
1. install aws-cli - https://docs.aws.amazon.com/cli/latest/userguide/installing.html
2. get personal aws accessKey and accessSecret from AWS IAM
3. configure the aws-cli by running 'aws configure'
4. get aws project id - aws mobile list-projects
5. re-connect to aws backend project by - awsmobile init {project-id}