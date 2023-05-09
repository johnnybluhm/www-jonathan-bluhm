# syntax=docker/dockerfile:1
   
FROM mcr.microsoft.com/dotnet/sdk:6.0
WORKDIR /JohnnyBluhmWeb
COPY ./JohnnyBluhmWeb .
RUN dotnet build
ENTRYPOINT echo Running
EXPOSE 7001