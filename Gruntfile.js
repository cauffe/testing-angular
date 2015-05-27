module.exports = function (grunt) {
	grunt.initConfig({
		person: {
			firstName: "Frank"
		}
	})

	grunt.registerTask("default", function (name) {
		grunt.log.writeln("hello " + grunt.config.get("person").firstName);
	})
}