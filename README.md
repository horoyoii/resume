## resume  

![image](https://user-images.githubusercontent.com/34915108/79360028-4fd22380-7f7e-11ea-80e1-bb5247c3844a.png)


## Abstract  

static file들은 github에서 호스팅해주고  
Data들은 react 앱와 aws AppSync 간의 GraphQL을 사용하여 구현해보았다.  
graphQL Client는 Apollo가 있었지만 여기서는 aws amplify graphQL client 를 사용  
또한 데이터 원본들은 DynamoDB에 저장되어 있으며,  
today를 자정마다 초기화하기 위하여 CloudWatch 에서 제공되는 time based event를 통해   
aws Lamdba와 연동하여 DynamoDB에 값을 초기화하도록 하였다.  
