# SDLC (Software Development Life Cycle)

- Planning
- Analysis == defining requirements
- Design
- Implement
- Test
- Deployment
- Maintenance

## Front-End:

`Nginix`
-> HTTP web server, load balancer (Round Robin), reverse proxy, caching

`React`
-> UI Components

`Redux`
-> A state container for State management
-> Dispatching actions

`Webpack`
-> Bundle JS script files for usage in a browser
-> Auto build

`Babel`
-> Compile JS codes that can be run by older engines

## Backend: use cloud computing services

`GCP`
-> run virtual machine instances
-> Google Buckets to storage some files

`AWS`
-> (EC2) / (Lamda) Host our web app using the `CodeDeploy` console:
https://aws.amazon.com/blogs/devops/integrating-with-github-actions-ci-cd-pipeline-to-deploy-a-web-app-to-amazon-ec2/
-> (S3) for Data storage / backup
-> Run applications and web servers through the cloud for hosting dynamic websites.

`Databases`
-> MySQL, MemSQL
-> Redis : Cache SQL queries so don’t have to recompute each time

## DevOps Deployment - Implement CI/CD workflow pipelines:

`Jest`
-> unit testing

`Jekins`
-> a deployment automation DevOps tool
-> test automation: provides plugins that help run test suites

`Git & Github`
-> for Version Control and code hosting

`Graylog`
-> log management platform for our virtual machines
