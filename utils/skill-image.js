// Backend Engineering Skills - Ankit Kumar Shaw
import java from '../app/assets/svg/skills/java.svg';
import springBoot from '../app/assets/svg/skills/spring-boot.svg';
import kafka from '../app/assets/svg/skills/kafka.svg';
import mysql from '../app/assets/svg/skills/mysql.svg';
import postgresql from '../app/assets/svg/skills/postgresql.svg';
import gcp from '../app/assets/svg/skills/gcp.svg';
import hibernate from '../app/assets/svg/skills/hibernate.svg';
import maven from '../app/assets/svg/skills/maven.svg';
import springSecurity from '../app/assets/svg/skills/spring-security.svg';
import jwt from '../app/assets/svg/skills/jwt.svg';
import redis from '../app/assets/svg/skills/redis.svg';
import git from '../app/assets/svg/skills/git.svg';
import docker from '../app/assets/svg/skills/docker.svg';
import kubernetes from '../app/assets/svg/skills/kubernetes.svg';
import python from '../app/assets/svg/skills/python.svg';
import apigee from '../app/assets/svg/skills/apigee.svg';
import restapi from '../app/assets/svg/skills/rest-api.svg';
import fastapi from '../app/assets/svg/skills/fastapi.svg';
import claude from '../app/assets/svg/skills/claude.svg';
import openai from '../app/assets/svg/skills/openai.svg';
import ml from '../app/assets/svg/skills/machine-learning.svg';
import llm from '../app/assets/svg/skills/llm.svg';
import deeplearning from '../app/assets/svg/skills/deep-learning.svg';



export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'java':
      return java;
    case 'spring boot':
      return springBoot;
    case 'kafka':
      return kafka;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'gcp':
      return gcp;
    case 'hibernate':
      return hibernate;
    case 'maven':
      return maven;
    case 'spring security':
      return springSecurity;
    case 'jwt':
      return jwt;
    case 'redis':
      return redis;
    case 'git':
      return git;
    case 'docker':
      return docker;
    case 'kubernetes':
      return kubernetes;
    case 'python':
      return python;
    case 'fastapi':
      return fastapi;
    case 'claude':
      return claude;
    case 'openai':
      return openai;
    case 'machine learning':
      return ml;
    case 'llm':
      return llm;
    case 'deep learning':
      return deeplearning;
    case 'apigee':
      return apigee;
    case 'rest api':
      return restapi;
    default:
      break;
  }
}
