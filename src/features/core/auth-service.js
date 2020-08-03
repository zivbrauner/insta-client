
export const authService = {
          isAuthenticated: false,
          user: null,
          setAuthenticated: function(value){
                    this.isAuthenticated = value;     
          }
}