// #ifndef vec3_h
// #define vec3_h

// #include <cmath>

// class vec3
// {
// public:
	// // Data
	// double x, y, z;

	// // Ctors
	// vec3( double InX, double InY, double InZ ) : x( InX ), y( InY ), z( InZ )
		// {
		// }
	// void SetDoublePoint( const double *v ) {  x=v[0]; y=v[1]; z=v[2]; }

	// vec3( ) : x(0), y(0), z(0)
		// {
		// }

	// // Operator Overloads
	// inline bool operator== (const vec3& V2) const 
		// {
		// return (x == V2.x && y == V2.y && z == V2.z);
		// }

	// inline vec3 operator+ (const vec3& V2) const 
		// {
		// return vec3( x + V2.x,  y + V2.y,  z + V2.z);
		// }
	// inline vec3 operator- (const vec3& V2) const
		// {
		// return vec3( x - V2.x,  y - V2.y,  z - V2.z);
		// }
	// inline vec3 SubP(const double *v) const
		// {
		  // return vec3( x - v[0],  y - v[1],  z - v[2]);
		// }

	// inline vec3 operator- ( ) const
		// {
		// return vec3(-x, -y, -z);
		// }

	// inline vec3 operator/ (double S ) const
		// {
		// double fInv = 1.0 / S;
		// return vec3 (x * fInv , y * fInv, z * fInv);
		// }
	// inline vec3 operator/ (const vec3& V2) const
		// {
		// return vec3 (x / V2.x,  y / V2.y,  z / V2.z);
		// }
	// inline vec3 operator* (const vec3& V2) const
		// {
		// return vec3 (x * V2.x,  y * V2.y,  z * V2.z);
		// }
	// inline vec3 operator* (double S) const
		// {
		// return vec3 (x * S,  y * S,  z * S);
		// }
	// inline vec3 operator+ (double S) const
		// {
		// return vec3 (x + S,  y + S,  z + S);
		// }
	// inline vec3 operator- (double S) const
		// {
		// return vec3 (x - S,  y - S,  z - S);
		// }

	// inline void operator+= ( const vec3& V2 )
		// {
		// x += V2.x;
		// y += V2.y;
		// z += V2.z;
		// }
	// inline void operator-= ( const vec3& V2 )
		// {
		// x -= V2.x;
		// y -= V2.y;
		// z -= V2.z;
		// }

	// inline double operator[] ( int i )
		// {
		// if ( i == 0 ) return x;
		// else if ( i == 1 ) return y;
		// else return z;
		// }

	// // Functions
	// inline double Dot( const vec3 &V1 ) const
		// {
		// return V1.x*x + V1.y*y + V1.z*z;
		// }

	// // These require math.h for the sqrt function
	// double Magnitude( ) const
		// {
		// return sqrt( x*x + y*y + z*z );
		// }

	// inline void Normalize()
		// {
		// double fMag = ( x*x + y*y + z*z );
		// if (fMag == 0) {return;}

		// double fMult = 1.0/sqrt(fMag);            
		// x *= fMult;
		// y *= fMult;
		// z *= fMult;
		// return;
		// }
// };

// inline vec3 SubtractDoubleDouble(const double *d1, const double *d2)
// {
  // return vec3(d1[0]-d2[0], d1[1]-d2[1], d1[2]-d2[2]);
// }

// inline double clamp(double d, double min, double max) 
// {
  // const double t = d < min ? min : d;
  // return t > max ? max : t;
// }


// inline void clamp(vec3 &v, double min, double max) 
// {
  // v.x = clamp(v.x,min,max);
  // v.y = clamp(v.y,min,max);
  // v.z = clamp(v.z,min,max);
// }



// #endif


#ifndef vec3_h
#define vec3_h

#ifdef _OPENACC
#include <accelmath.h>
#else
#include <math.h>
#endif


typedef struct 
{
  double x, y, z;
}  vec3;

#define SET_POINT(p,v) { p.x=v[0]; p.y=v[1]; p.z=v[2]; }

#define SUBTRACT_POINT(p,v,u)			\
  {						\
  p.x=(v[0])-(u[0]);				\
  p.y=(v[1])-(u[1]);				\
  p.z=(v[2])-(u[2]);				\
}

#define NORMALIZE(p) {					\
    double fMag = ( p.x*p.x + p.y*p.y + p.z*p.z );	\
    if (fMag != 0)					\
      {							\
	double fMult = 1.0/sqrt(fMag);			\
	p.x *= fMult;					\
	p.y *= fMult;					\
	p.z *= fMult;					\
      }							\
  }


#define MAGNITUDE(m,p) 	({ m=sqrt( p.x*p.x + p.y*p.y + p.z*p.z ); })

#define DOT(d,p) {  d=( p.x*p.x + p.y*p.y + p.z*p.z ); }

#define MAX(a,b) ( ((a)>(b))? (a):(b))

#define VEC(v,a,b,c) { v.x = a; v.y = b; v.z = c; }

#endif