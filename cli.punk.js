#!/usr/bin/env node
;{};{};{};{};{};{};{};{};{};{};{};{};
{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};;{};{};{};{};{};{};{};{};{};{};{};{};
{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};var punkify = require('./');{};{};{};{};{};{};{};{};{};{};{};{};
{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};var fs = require('fs');{};{};{};{};{};{};{};{};{};{};{};{};
{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};;{};{};{};{};{};{};{};{};{};{};{};{};
{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};var file = process.argv[2];{};{};{};{};{};{};{};{};{};{};{};{};
{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};var out = process.argv[3];{};{};{};{};{};{};{};{};{};{};{};{};
{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};;{};{};{};{};{};{};{};{};{};{};{};{};
{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};var reader = fs.createReadStream(file);{};{};{};{};{};{};{};{};{};{};{};{};
{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};var writer = fs.createWriteStream(out);{};{};{};{};{};{};{};{};{};{};{};{};
{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};;{};{};{};{};{};{};{};{};{};{};{};{};
{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};writer.write('//{};{};THIS FILE IS FUCKING PUNK{};{};\n');{};{};{};{};{};{};{};{};{};{};{};{};
{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};;{};{};{};{};{};{};{};{};{};{};{};{};
{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};reader.pipe(punkify()).pipe(writer);{};{};{};{};{};{};{};{};{};{};{};{};
{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};{};