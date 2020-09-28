const awsmobile = {
    aws_appsync_authenticationType: process.env.REACT_APP_AWS_APPSYNC_AUTHENTICATIONTYPE,
    aws_appsync_graphqlEndpoint: process.env.REACT_APP_AWS_APPSYNC_GRAPHQLENDPOINT,
    aws_appsync_region: process.env.REACT_APP_AWS_APPSYNC_REGION,
    aws_cloud_logic_custom: [
        {
            endpoint: process.env.REACT_APP_AWS_CLOUD_LOGIC_CUSTOM_ENDPOINT,
            name: process.env.REACT_APP_AWS_CLOUD_LOGIC_CUSTOM_NAME,
            region: process.envREACT_APP_AWS_CLOUD_LOGIC_CUSTOM_REGION
        }
    ],
    aws_cognito_region: process.env.REACT_APP_AWS_COGNITO_REGION,
    aws_project_region: process.env.REACT_APP_AWS_PROJECT_REGION,
    aws_user_pools_id: process.env.REACT_APP_AWS_USER_POOLS_ID,
    aws_user_pools_web_client_id: process.env.REACT_APP_AWS_USER_POOLS_WEB_CLIENT_ID
};

export default awsmobile;
