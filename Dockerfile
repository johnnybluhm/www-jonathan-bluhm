# syntax=docker/dockerfile:1
   
FROM mcr.microsoft.com/dotnet/sdk:6.0
WORKDIR /JohnnyBluhmWeb
COPY ./JohnnyBluhmWeb .
RUN dotnet build
CMD dotnet /JohnnyBluhmWeb/bin/Debug/net6.0/JohnnyBluhmWeb.dll
EXPOSE 5000