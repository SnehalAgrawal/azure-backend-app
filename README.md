# To generate AZURE_CREDENTIALS
az ad sp create-for-rbac --name "myApp" --role contributor --scopes /subscriptions/{{subscriptions Id}}/resourceGroups/{{Resource Group}} --sdk-auth
